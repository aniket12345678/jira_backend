const express = require('express');
const { UserRoute } = require('./user.route');
const { JobPostRoute } = require('./job_post.route');
const AllRoutes = express();

AllRoutes.use('/user', UserRoute);
AllRoutes.use('/job', JobPostRoute);

module.exports = { AllRoutes }