const jwt = require('jsonwebtoken');

const responseHandler = {
    success: (res, code, message, data = {}) => {
        res.status(200).send({
            code: code,
            data: data,
            message: message,
        })
    },
    error: (res, error) => {
        console.log('error:- ', error);
        res.status(500).send({
            code: 500,
            message: error
        })
    },
    unauthorized: (res, message) => {
        res.status(401).send({
            code: 401,
            message: message
        })
    }
}

const verifyToken = () => {
    return async (req, res, next) => {
        try {
            const { authorization } = req.headers;
            if (!authorization || !authorization.includes("Bearer")) {
                return responseHandler.unauthorized(res, "Invalid token");
            }
            const response = jwt.verify(authorization.split(" ")[1], process.env.JWT_KEY);
            if (response) {
                req.body.loggedInUser = response.fetchUser;
                next();
            } else {
                return responseHandler.unauthorized(res, "Token does not matches");
            }
        } catch (error) {
            return responseHandler.error(res, error);
        }
    }
}

const joiMiddleware = (schema) => {
    return async (req, res, next) => {
        try {
            const { error } = schema.validate(req.body);
            if (error) {
                const allErrors = error.details.map((x) => x.message);
                return responseHandler.error(res, allErrors);
            } else {
                next();
            }
        } catch (error) {
            return responseHandler.error(res, error);
        }
    }
}

module.exports = { responseHandler, joiMiddleware, verifyToken };