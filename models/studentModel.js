const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  contact:{
    type: String,
    required: true,

  },
  course:{
    type: String,
    required: true,

  }
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;