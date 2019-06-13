const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    client_id = String,
    street = String,
    ext_number = String,
    int_number = String,
    neighborhood = String,
    town = String,
    zip_code = String,
    state = String,
    references = String
});

mongoose.model('Address', addressSchema);