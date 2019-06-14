require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

require('./models/Users');
require('./models/Products');
require('./models/Containers');
require('./models/Ties');
require('./models/Wrappings');

require('./routes/usersRoutes')(app);
require('./routes/productsRoutes')(app);
require('./routes/containersRoutes')(app);
require('./routes/tiesRoutes')(app);
require('./routes/wrappingsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');

    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT);