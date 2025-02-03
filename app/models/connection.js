const { Sequelize } = require("sequelize");

const newConnection = new Sequelize('jira_clone', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
    },
    logging: false
});

newConnection.authenticate().then((response) => {
    console.log('connection success');
}).catch((err) => {
    console.log('connection failure', err);
});

module.exports = { newConnection }