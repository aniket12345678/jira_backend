const { model } = require("mongoose");
const { UserModel } = require("./user.model");
const { JobPostModel } = require("./job_post.model");

const UserSchema = model('users', UserModel, 'users');
const JobPostSchema = model('job_post', JobPostModel, 'job_post');

module.exports = { UserSchema, JobPostSchema }