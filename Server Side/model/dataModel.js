// models/dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  DateTime: {
    type: Date,
    required: true,
  },
  NoOfPeople: {
    type: Number,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Data', dataSchema);
