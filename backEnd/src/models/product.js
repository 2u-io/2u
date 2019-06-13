const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    store_id: String,
    name: String,
    price: Number,
    discount: Number,
    fragile: Boolean,
    description: String,
    image_url: String
});

mongoose.model('Product', productSchema);