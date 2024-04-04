const express = require('express');
const { createData } = require('../controller/dataController');
const router = express.Router();

router.post('/data', createData);

module.exports = router;
