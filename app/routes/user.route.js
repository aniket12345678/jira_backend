const express = require('express');
const { SignUp, SignIn } = require('../controllers/user.controller');

const UserRoute = express();

UserRoute.post('/signup', SignUp);
UserRoute.post('/signin', SignIn);

module.exports = { UserRoute }