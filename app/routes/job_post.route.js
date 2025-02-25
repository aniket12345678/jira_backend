const express = require('express');
const { AddPost, Listing, RemoveJob } = require('../controllers/job_post.controller');
const { verifyToken } = require('../middleware/middleware');

const JobPostRoute = express();

JobPostRoute.post('/add', [verifyToken()], AddPost);
JobPostRoute.post('/listing', [verifyToken()], Listing);
JobPostRoute.post('/remove', [verifyToken()], RemoveJob);

module.exports = { JobPostRoute }