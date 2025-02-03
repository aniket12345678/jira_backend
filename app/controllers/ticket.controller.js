const { TicketModel } = require("../models/ticket.model");

const add = (req, res) => {
    try {
        console.log('req.body:- ', req.body);
        console.log('this is an add function');
        // TicketModel.create({})
    } catch (error) {
        console.log('error:- ', error);
    }
}

module.exports = { add };