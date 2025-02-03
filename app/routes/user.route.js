const exApp = require('express');
const { signIn, signUp } = require('../controllers/user.controller');

const AuthRoute = exApp();

AuthRoute.post('/signup', signUp);
AuthRoute.post('/signin', signIn);

module.exports = { AuthRoute };