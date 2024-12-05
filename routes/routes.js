const router = require('express').Router();

const { adminsRouter } = require('./admins');
const { employeesRouter } = require('./employees');
const auth = require('../middlewares/auth');

const {
  validateRegisterBody,
  validateRegistration,
} = require('../middlewares/validation');
const { createUser, login } = require('../conrollers/users');

router.post('/signin', validateRegisterBody, login);
router.post('/signup', validateRegistration, createUser);

router.use('/users', auth, adminsRouter);
router.use('/movies', auth, employeesRouter);

exports.router = router;
