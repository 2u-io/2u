const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: String,
    image_url: String
});

mongoose.model('Store', storeSchema);