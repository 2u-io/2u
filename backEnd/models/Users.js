const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
    username: String,
    password: String
});

mongoose.model('users', usersSchema);