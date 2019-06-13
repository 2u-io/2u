const express = require('express');

const loginRoutes = require('./login');
const productRoutes = require('./product');
const giftContainerRoutes = require('./giftContainer');

const router = express.Router();

router.use('/api', loginRoutes);
router.use('/api', productRoutes);
router.use('/api', giftContainerRoutes);

module.exports = router;