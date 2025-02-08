const exApp = require('express');
const { add } = require('../controllers/task.controller');
const { verifyToken, joiMiddleware } = require('../middleware/middleware');
const { TaskJoi } = require('../validationSchema/schema');

const TaskRoute = exApp();

TaskRoute.post('/add', [joiMiddleware(TaskJoi.add), verifyToken()], add);
TaskRoute.post('/listing', [joiMiddleware(TaskJoi.add), verifyToken()], add);

module.exports = { TaskRoute };