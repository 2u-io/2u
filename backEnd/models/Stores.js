const mongoose = require('mongoose');

const { Schema } = mongoose;

const storesSchema = new Schema({
    name: String,
    image_url: String
});

mongoose.model('stores', storesSchema);