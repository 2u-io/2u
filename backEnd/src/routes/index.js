const express = require('express');

const loginRoutes = require('./login');
const productRoutes = require('./product');

const router = express.Router();

router.use('/api', loginRoutes);
router.use('/api', productRoutes);

module.exports = router;