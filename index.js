require("dotenv").config();

const { NODE_ENV, DB_CONNECTION_STRING } = process.env;
const express = require("express");
const mongoose = require("mongoose");
const { errors } = require('celebrate');
const cors = require("cors");
const errorHandler = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { NotFoundError } = require('./errors/index');
const { router } = require('./routes/routes');

const app = express();
const { PORT = 3002 } = process.env;
app.use(express.json());
app.use(
  cors({
    origin: true,
    exposedHeaders: "*",
    credentials: true,
  })
);
mongoose.connect(
  NODE_ENV === "production"
    ? DB_CONNECTION_STRING
    : "mongodb://localhost:27017/testProfit",
  {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
  }
);

app.use(requestLogger);
app.use(router);

app.use((req, res, next) => {
  next(new NotFoundError("Ресурс не найден"));
}); // ошибка 404
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT, () => {});
