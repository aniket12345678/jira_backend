const { UserModel } = require("../models/user.model");
const { UserDetailsModel } = require("../models/user_details.model");

const signUp = (req, res) => {
    try {
        console.log('req.body:- ', req.body);
        console.log('this is a signup function');
        UserDetailsModel.create()
        UserModel.create()
    } catch (error) {
        console.log('error:- ', error);
    }
};

const signIn = (req, res) => {
    try {
        console.log('req.body:- ', req.body);
        console.log('this is a signIn function');
    } catch (error) {
        console.log('error:- ', error);
    }
};

module.exports = { signUp, signIn }