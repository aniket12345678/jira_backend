const { DataTypes } = require("sequelize");
const { newConnection } = require("./connection");

const UserModel = newConnection.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

UserModel.sync().then((response) => {
    console.log('UserModel is created:- ', response);
}).catch((err) => {
    console.log('UserModel err:- ', err);
});

module.exports = { UserModel };