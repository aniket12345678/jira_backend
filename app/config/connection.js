const { default: mongoose } = require("mongoose");

async function newConnection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/db_job_posting');
        console.log('Connection success');
    } catch (error) {
        console.log('Connection failure');
    }
}

module.exports = { newConnection }