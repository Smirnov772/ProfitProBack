const mongoose = require('mongoose');
// const validator = require('validator');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('admin', adminSchema);
