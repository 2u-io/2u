const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeSchema = new Schema({
    id: String,
    name: String,
    image_url: String
});

module.exports = mongoose.model('Stores', storeSchema);