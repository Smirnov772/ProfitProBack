const { celebrate, Joi } = require('celebrate');

const validationObject = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
    userId: Joi.string().hex().length(24),
  }),
});

module.exports = validationObject;
