const mongoose = require('mongoose');

const { Schema } = mongoose;

const giftContainerSchema = new Schema({
    id: String,
    product_id: String,
    name: String,
    price: Number,
    image_url: String
});

module.exports = mongoose.model('GiftContainers', giftContainerSchema);