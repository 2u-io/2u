require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const url = process.env.MONGODB;
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

mongoose.connect(url, { useNewUrlParser: true }, () => {
    app.listen(port, () => {
        console.log(`Server listening on port ${ port }`);
    });
});