const express = require('express');

const loginRoutes = require('./login');
const productRoutes = require('./product');
const giftContainerRoutes = require('./giftContainer');
const giftTieRoutes = require('./giftTie');
const giftWrappingRoutes = require('./giftWrapping');

const router = express.Router();

router.use('/api', loginRoutes);
router.use('/api', productRoutes);
router.use('/api', giftContainerRoutes);
router.use('/api', giftTieRoutes);
router.use('/api', giftWrappingRoutes);

module.exports = router;