const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
  // likes: {
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'admin' }],
  //   default: [],
  // },

  name: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    validator: (value) => validator.isURL(value, { require_protocol: true }),
    message: "Неправильная ссылка",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
    require: true,
  },
  employeeId: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("employee", employeeSchema);
