const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sizeSchema = new Schema({
    name: String,
    sizes: {
        height: Number,
        width: Number,
        depth: Number
    }
});

mongoose.model('Size', sizeSchema);