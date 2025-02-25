const { Schema } = require("mongoose");

const UserModel = new Schema({
    name: {
        type: String,
        required: true
    },
    user_role: {
        type: Number, // 1 - admin, 2 - users
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = { UserModel };