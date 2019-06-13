const express = require('express');
const mongoose = require('mongoose');

const giftTieModel = require('../models/GiftTies');

const router = express.Router();

router.get('/gift-ties', (request, response) => {
    giftTieModel.find({})
    .then(ties => {
        if (ties.length === 0) {
            throw 'No existen moños para regalos registradas.'
        }
        else {
            response.send(ties);
        }
    })
    .catch(error => {
        response.json({
            error
        });
    });
});

router.get('/gift-ties/:id', (request, response) => {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        response.json({
            error: 'El ID no es válido.'
        });
    }
    else {
        giftTieModel.findOne({
            _id: request.params.id
        })
        .then(tie => {
            if (!tie) {
                throw 'El moño para regalo no existe.'
            }
            else {
                response.send(tie);
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