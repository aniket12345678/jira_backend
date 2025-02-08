const exApp = require('express');
const allRoutes = exApp();

const { AuthRoute } = require('./user.route');
const { TaskRoute } = require("./task.route");

allRoutes.use('/auth', AuthRoute);
allRoutes.use('/task', TaskRoute);

module.exports = { allRoutes }