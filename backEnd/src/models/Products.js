const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    id: String,
    store_id: String,
    name: String,
    description: String,
    price: Number,
    image_url: String,
    dimension: {
        height: Number,
        width: Number,
        depth: Number
    },
    weight: Number
});

module.exports = mongoose.model('Products', productSchema);