const { responseHandler } = require("../middleware/middleware");
const { UserModel } = require("../models/user.model");
const { UserDetailsModel } = require("../models/user_details.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
        const store = req.body;
        const fetchUser = await UserModel.findOne({ where: { email: store.email } });
        if (fetchUser) {
            return responseHandler.success(res, 401, "User already exists");
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(store.password, salt);
        store.password = hash;
        const result = await UserModel.create(store);
        store.user_id = result.id;
        await UserDetailsModel.create(store);
        return responseHandler.success(res, 200, "Data added successfully");
    } catch (error) {
        return responseHandler.error(res, error);
    }
};

const signIn = async (req, res) => {
    try {
        const store = req.body;
        const fetchUser = await UserModel.findOne({ where: { email: store.email } });
        if (!fetchUser) {
            return responseHandler.success(res, 401, "User does not exists");
        }
        const isPassword = bcrypt.compareSync(store.password, fetchUser.password);
        if (!isPassword) {
            return responseHandler.success(res, 401, "Password is wrong");
        }
        return responseHandler.success(res, 200, "Successfully logged In", {
            user: fetchUser,
            token: jwt.sign({ fetchUser }, process.env.JWT_KEY, { expiresIn: 10 })
        });
    } catch (error) {
        return responseHandler.error(res, error);
    }
};

module.exports = { signUp, signIn }