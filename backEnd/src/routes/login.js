const express = require('express');

const userModel = require('../models/Users');

const router = express.Router();

router.post('/login', (request, response) => {
    userModel.findOne({
        username: request.body.username
    })
    .then(document => {
        if (!document) {
            throw 'El usuario no es válido.';
        }
        else if (document.password !== request.body.password) {
            throw 'La contraseña no es correcta.';
        }
        else {
            response.json({
                _id: document._id
            });
        }
    })
    .catch(error => {
        response.json({
            error
        });
    });
});

module.exports = router;