const express = require('express');
const mongoose = require('mongoose');

const giftContainerModel = require('../models/GiftContainers');

const router = express.Router();

router.get('/gift-containers', (request, response) => {
    giftContainerModel.find({})
    .then(containers => {
        if (containers.length === 0) {
            throw 'No existen cajas o bolsas de regalo registradas.'
        }
        else {
            response.send(containers);
        }
    })
    .catch(error => {
        response.json({
            error
        });
    });
});

router.get('/gift-containers/:id', (request, response) => {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        response.json({
            error: 'El ID no es válido.'
        });
    }
    else {
        giftContainerModel.findOne({
            _id: request.params.id
        })
        .then(container => {
            if (!container) {
                throw 'La caja o bolsa de regalo no existe.'
            }
            else {
                response.send(container);
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