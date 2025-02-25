const { Schema } = require("mongoose");

const JobPostModel = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = { JobPostModel };