const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const decorationSchema = new Schema({
    name: String,
    types: [
        {
            name: String,
            image_url: String
        }
    ],
    colors: [String],
    sizes: [String]
});

mongoose.model('Decoration', decorationSchema);