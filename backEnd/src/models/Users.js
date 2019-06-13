const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    id: String,
    username: String,
    password: String
});

module.exports = mongoose.model('Users', userSchema);