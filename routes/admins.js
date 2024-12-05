const adminsRouter = require('express').Router();
const { validateUpdateUser } = require('../middlewares/validation');
// const validationObject = require('../middlewares/validationObject');

const {
  getCurrentUser,
  updateUsers,
} = require('../conrollers/users');

adminsRouter.get('/me', getCurrentUser);
adminsRouter.patch('/me', validateUpdateUser, updateUsers);

exports.adminsRouter = adminsRouter;
