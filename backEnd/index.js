const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 5000;

var url = "mongodb+srv://test:test@test-roa0y.mongodb.net/2u?retryWrites=true";

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        var dbo = db.db("2u");

        let query = {
            username: req.body.username
        }

        dbo.collection("users").findOne(query, function (err, result) {
            if (err) console.log(err);

            if (!result) {
                res.send({
                    success: false,
                    error: "Usuario no válido."
                });
            }
            else if (result.password !== req.body.password) {
                res.send({
                    success: false,
                    error: "Contraseña incorrecta."
                });
            }
            else {
                res.send({
                    success: true,
                    id: result._id
                });
            }

            db.close();
        });
    });
});

app.get('/stores', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        var dbo = db.db("2u");

        dbo.collection("stores").find({}).toArray(function (err, result) {
            if (err) console.log(err);

            if (!result) {
                res.send({
                    success: false,
                    error: "No existen tiendas en la base de datos."
                });
            }
            else {
                res.send({
                    success: true,
                    stores: result
                });
            }

            db.close();
        });
    });
});

app.get('/products/:id', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        var dbo = db.db("2u");

        let query = {
            store_id: req.params.id
        }

        dbo.collection("products").find(query).toArray(function (err, result) {
            if (err) console.log(err);

            if (!result.length) {
                res.send({
                    success: false,
                    error: "La tienda no tiene productos."
                });
            }
            else {
                res.send({
                    success: true,
                    products: result
                });
            }

            db.close();
        });
    });
});

app.listen(port, () => {
    console.log('Server online on port', port);
});