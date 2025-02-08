const exApp = require('express');
const AuthRoute = exApp();

const { AuthJoi } = require('../validationSchema/schema');
const { joiMiddleware } = require('../middleware/middleware');
const { signIn, signUp } = require('../controllers/user.controller');

AuthRoute.post('/signup', joiMiddleware(AuthJoi.signUp), signUp);
AuthRoute.post('/signin', joiMiddleware(AuthJoi.signIn), signIn);

module.exports = { AuthRoute };