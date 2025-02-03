const exApp = require('express');
const allRoutes = exApp();

const { AuthRoute } = require('./user.route');
const { TicketRoute } = require("./ticket.route");

allRoutes.use('/auth', AuthRoute);
allRoutes.use('/ticket', TicketRoute);

module.exports = { allRoutes }