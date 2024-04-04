// const Data = require('../models/dataModel');
const schema = require('../utils/validation');

const dataModel = require("../model/dataModel");

const createData = async (req, res) => {
  try {
    const validatedData = await schema.validateAsync(req.body);
    const newData = new dataModel(validatedData);
    await newData.save();
    return res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createData,
};
