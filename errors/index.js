const NotFoundError = require('./not-found-err');
const ConflictError = require('./Conflict-err');
const UnAuthorizationError = require('./un-authorization-err');
const BadRequestError = require('./bad-request-err');
const ServerError = require('./server-error');
const Forbiddenerror = require('./forbiddenerror');

module.exports = {
  NotFoundError,
  ConflictError,
  UnAuthorizationError,
  BadRequestError,
  ServerError,
  Forbiddenerror,
};
