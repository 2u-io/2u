const express = require('express');

const login = require('./login');

const router = express.Router();

router.use('/api', login);

module.exports = router;