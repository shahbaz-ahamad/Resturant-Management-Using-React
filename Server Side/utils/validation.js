// utils/validation.js
const Joi = require('joi');

const schema = Joi.object({
  Name: Joi.string().required(),
  Email: Joi.string().email().required(),
  DateTime: Joi.date().required(),
  NoOfPeople: Joi.number().integer().min(1).required(),
  Message: Joi.string().required(),
});

module.exports = schema;
