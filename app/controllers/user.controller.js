const { ResponseHandler } = require("../middleware/middleware");
const { UserSchema } = require("../models/index.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SignUp = async (req, res) => {
    try {
        const store = req.body;
        const UserExists = await UserSchema.findOne({ email: store.email });
        if (UserExists) {
            return ResponseHandler.success(res, 'User already exists', 400);
        }
        const salt = bcrypt.genSaltSync(10);
        store.password = bcrypt.hashSync(store.password, salt);
        store.user_role = 2;
        await UserSchema.insertOne(store);
        return ResponseHandler.success(res, 'User signed up successfully', 200);
    } catch (error) {
        return ResponseHandler.error(res, error);
    }
}

const SignIn = async (req, res) => {
    try {
        const store = req.body;
        const UserExists = await UserSchema.findOne({ email: store.email });
        if (!UserExists) {
            return ResponseHandler.success(res, 'User does not exists', 400);
        }
        const isPassword = bcrypt.compareSync(store.password, UserExists.password);
        if (!isPassword) {
            return ResponseHandler.success(res, 'Password is wrong', 400);
        }
        return ResponseHandler.success(res, 'User logged in successfully', 200, {
            user: UserExists,
            token: jwt.sign({ UserExists }, process.env.JWT_KEY)
        });
    } catch (error) {
        return ResponseHandler.error(res, error);
    }
}

module.exports = { SignIn, SignUp }