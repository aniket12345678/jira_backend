const { DataTypes } = require("sequelize");
const { newConnection } = require("./connection");

const TicketModel = newConnection.define('ticket', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

TicketModel.sync().then((response) => {
    console.log('TicketModel is created:- ', response);
}).catch((err) => {
    console.log('TicketModel err:- ', err);
});

module.exports = { TicketModel }