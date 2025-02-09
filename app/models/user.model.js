const { DataTypes } = require("sequelize");
const { newConnection } = require("./connection");

const UserModel = newConnection.define('users_tbl', {
    user_role: {
        type: DataTypes.INTEGER, // 1-company(manager) 2-employee
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(
    async () => {
        try {
            await UserModel.sync();
        } catch (error) {
            console.log('UserModel err:- ', err);
        }
    }
)();

module.exports = { UserModel };