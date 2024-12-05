const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateRegisterBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isEmail(value)) {
          return value;
        }
        return helpers.messages('Не корректный email');
      })
      .messages({ 'any.required': 'Обязательное поле' }),
    password: Joi.string()
      .min(2)
      .required()
      .messages({
        'string.min': 'Миниvальное поле 2 символа',
        'any.required': 'Обязательное поле',
      }),
  }),
});

const validateRegistration = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
    email: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isEmail(value)) {
          return value;
        }
        return helpers.message('Не корректный email');
      })
      .message({ 'any.required': 'Обязательное поле' }),
    password: Joi.string()
      .min(2)
      .required()
      .messages({
        'string.min': 'Миниvальное поле 2 символа',
        'any.required': 'Обязательное поле',
      }),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    paragraph: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value, { require_protocol: true })) {
          return value;
        }
        return helpers.message('Не корректный адрес');
      }).message({ 'any.required': 'Обязательное поле' }),
    trailer: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value, { require_protocol: true })) {
          return value;
        }
        return helpers.message('Не корректный адрес');
      }).message({ 'any.required': 'Обязательное поле' }),
    thumbnail: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value, { require_protocol: true })) {
          return value;
        }
        return helpers.message('Не корректный адрес');
      }).message({ 'any.required': 'Обязательное поле' }),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    movieId: Joi.number().required(),
  }),
});
const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
    email: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isEmail(value)) {
          return value;
        }
        return helpers.message('Не корректный email');
      })
      .message({ 'any.required': 'Обязательное поле' }),
  }),
});

module.exports = {
  validateRegisterBody,
  validateRegistration,
  validateCreateMovie,
  validateUpdateUser,
};
