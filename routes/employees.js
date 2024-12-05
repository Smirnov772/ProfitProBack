const employeesRouter = require("express").Router();
const validationObject = require("../middlewares/validationObject");

const { validateCreateMovie } = require("../middlewares/validation");

const {
  getEmployees,
  createEmployees,
  deleteEmployees,
} = require("../conrollers/employees");

employeesRouter.get("/", getEmployees);
employeesRouter.post("/", createEmployees);
employeesRouter.delete("/:movieId", deleteEmployees);

exports.employeesRouter = employeesRouter;
