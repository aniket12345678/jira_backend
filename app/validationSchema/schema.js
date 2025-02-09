const Joi = require("joi");

const AuthJoi = {
    signUp: Joi.object({
        first_name: Joi.string().required('First name required'),
        last_name: Joi.string().required('Last name required'),
        user_role: Joi.number().required('User role required'),
        email: Joi.string().required('Email required'),
        password: Joi.string().required('Password required'),
    }),
    signIn: Joi.object({
        email: Joi.string().required('Email required'),
        password: Joi.string().required('Password required'),
    })
}

const TaskJoi = {
    add: Joi.object({
        title: Joi.string().required('Title required'),
        description: Joi.string().required('description required'),
        assignee_id: Joi.number().required('Assignee required')
    }),
}

module.exports = { AuthJoi, TaskJoi };