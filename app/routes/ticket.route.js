const exApp = require('express');
const { add } = require('../controllers/ticket.controller');

const TicketRoute = exApp();

TicketRoute.post('/add', add);

module.exports = { TicketRoute };