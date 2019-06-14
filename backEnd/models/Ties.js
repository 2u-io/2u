const mongoose = require('mongoose');

const { Schema } = mongoose;

const tiesSchema = new Schema({
    name: String,
    color: String,
    price: Number,
    image_url: String
});

mongoose.model('ties', tiesSchema);