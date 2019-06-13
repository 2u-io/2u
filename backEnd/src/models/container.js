const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const containerSchema = new Schema({
    name: String,
    description: String
});

mongoose.model('Container', containerSchema);