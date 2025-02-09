const { DataTypes } = require("sequelize");
const { newConnection } = require("./connection");

const TaskModel = newConnection.define('tasks_tbl', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    assignee_id: {
        type: DataTypes.INTEGER, // user_id
        allowNull: false
    }
});

(
    async () => {
        try {
            await TaskModel.sync();
        } catch (error) {
            console.log('TaskModel err:- ', err);
        }
    }
)()


module.exports = { TaskModel }