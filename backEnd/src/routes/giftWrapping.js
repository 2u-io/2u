const express = require('express');
const mongoose = require('mongoose');

const giftWrappingModel = require('../models/GiftTies');

const router = express.Router();

router.get('/gift-wrappings', (request, response) => {
    giftWrappingModel.find({})
    .then(wrappings => {
        if (wrappings.length === 0) {
            throw 'No existen envolturas para regalos registradas.'
        }
        else {
            response.send(wrappings);
        }
    })
    .catch(error => {
        response.json({
            error
        });
    });
});

router.get('/gift-wrappings/:id', (request, response) => {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        response.json({
            error: 'El ID no es válido.'
        });
    }
    else {
        giftWrappingModel.findOne({
            _id: request.params.id
        })
        .then(wrapping => {
            if (!wrapping) {
                throw 'La envoltura para regalo no existe.'
            }
            else {
                response.send(wrapping);
            }
        })
        .catch(error => {
            response.json({
                error
            });
        });
    }
});

module.exports = router;