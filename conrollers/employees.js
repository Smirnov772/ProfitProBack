const employee = require("../models/employee");
const {
  NotFoundError,
  BadRequestError,
  ServerError,
  Forbiddenerror,
} = require("../errors/index");

const getEmployees = (req, res, next) => {
  employee
    .find({})
    .then((employee) => res.send(employee))
    .catch(() => next(new ServerError("Ошибка сервера.")));
};

const createEmployees = (req, res, next) => {
  const {
    name,
    paragraph,
    image,
  } = req.body;
  employee
    .create({
      name,
      paragraph,
      image,
      owner: req.admin._id,
    })
    .then((employee) => res.send(employee))

    .catch((err) => {
      if (err.name === "ValidationError") {
        next(
          new BadRequestError(
            "Переданы некорректные данные при создании фильма."
          )
        );
      }
      next(new ServerError("Ошибка сервера."));
    });
};

const deleteEmployees = (req, res, next) => {
  employee
    .findById(req.params.movieId)
    .then((employee) => {
      if (!employee) {
        throw new NotFoundError("Фильм с указанным _id не найдена.");
      } else {
        employee
          .findById(req.params.employeeId)
          .then(() => {
            if (!employee.owner.equals(req.admin._id)) {
              throw new Forbiddenerror("Фильм не в вашей колекции.");
            } else {
              employee
                .findByIdAndDelete(req.params.movieId)
                .then(() => {
                  res.send(employee);
                })
                .catch((err) => next(err));
            }
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        next(new BadRequestError("Передан некорректный _id."));
      }
      next(new ServerError("Ошибка сервера."));
    });
};

module.exports = {
  getEmployees,
  createEmployees,
  deleteEmployees,
};
