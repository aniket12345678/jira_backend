const { ResponseHandler } = require("../middleware/middleware");
const { JobPostSchema } = require("../models/index.model");

const AddPost = async (req, res) => {
    try {
        const store = req.body;
        await JobPostSchema.insertOne(store);
        return ResponseHandler.success(res, 'Job added successfully', 200);
    } catch (error) {
        return ResponseHandler.error(res, error);
    }
}

const Listing = async (req, res) => {
    try {
        const response = await JobPostSchema.find();
        return ResponseHandler.success(res, 'User signed up successfully', 200, {
            data: response
        });
    } catch (error) {
        return ResponseHandler.error(res, error);
    }
}

const RemoveJob = async (req, res) => {
    try {
        await JobPostSchema.deleteOne({ _id: req.body.id })
        return ResponseHandler.success(res, 'Job removed successfully', 200);
    } catch (error) {
        return ResponseHandler.error(res, error);
    }
}

module.exports = { AddPost, Listing, RemoveJob }