const mongoose = require('mongoose');

const { Schema } = mongoose;

const wrappingsSchema = new Schema({
    name: String,
    color: String,
    price: Number,
    image_url: String
});

mongoose.model('wrappings', wrappingsSchema);