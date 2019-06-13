const mongoose = require('mongoose');

const { Schema } = mongoose;

const giftTieSchema = new Schema({
    id: String,
    name: String,
    color: String,
    price: Number,
    image_url: String
});

module.exports = mongoose.model('GiftTies', giftTieSchema);