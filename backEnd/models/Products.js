const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
    store_id: String,
    name: String,
    description: String,
    dimension: {
        height: Number,
        width: Number,
        depth: Number
    },
    weight: Number,
    price: Number,
    image_url: String
});

mongoose.model('products', productsSchema);