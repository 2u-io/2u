const mongoose = require('mongoose');

const { Schema } = mongoose;

const containersSchema = new Schema({
    name: String,
    price: Number,
    image_url: String
});

mongoose.model('containers', containersSchema);