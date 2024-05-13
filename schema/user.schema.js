import Joi from 'joi'

export const createUserSchema = Joi.object({
    name:Joi.string().required()
    .min(2)
    .max(20)
    .messages({
        'any.required': 'EL nombre debe contener entre 2 a 20 caracteres'
    }),

    image: Joi.string().required()
    .uri()
    .messages({
        'any.required': 'URL no válida'
    }),

    email: Joi.string().required().email({
        minDomainSegments:2
    })
    .messages({
        'any.required': 'Email es obligatorio'
    }),

    password: Joi.string().required()
    .min(6)
    .max(20)
    .alphanum()
    .messages({
        'any.required': 'La contraseña debe tener entre 6 a 20 caracteres'
    })
})