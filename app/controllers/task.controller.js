const { responseHandler } = require("../middleware/middleware");
const { TaskModel } = require("../models/task.model");

const add = async (req, res) => {
    try {
        const store = req.body;
        await TaskModel.create(store);
        return responseHandler.success(res, 200, "Data added successfully");
    } catch (error) {
        return responseHandler.error(res, error);
    }
}

const edit = async (req, res) => {
    try {
        const store = req.body;
        console.log('req.body:- ', req.body);
        console.log('this is an edit function');
    } catch (error) {
        return responseHandler.error(res, error);
    }
}

const remove = async (req, res) => {
    try {
        const store = req.body;
        console.log('req.body:- ', req.body);
        console.log('this is a remove function');
    } catch (error) {
        return responseHandler.error(res, error);
    }
}

const listing = async () => {
    try {
        console.log('');
    } catch (error) {
        console.log('error:- ', error);
    }
}

module.exports = { add, edit, remove, listing };