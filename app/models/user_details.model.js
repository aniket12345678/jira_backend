const { DataTypes } = require("sequelize");
const { newConnection } = require("./connection");

const UserDetailsModel = newConnection.define('user_details', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

UserDetailsModel.sync().then((response) => {
    console.log('UserDetailsModel is created:- ', response);
}).catch((err) => {
    console.log('UserDetailsModel err:- ', err);
});

module.exports = { UserDetailsModel };