const express = require('express');
const mongoose = require('mongoose');

const productModel = require('../models/Products');

const router = express.Router();

router.get('/store/:id/products', (request, response) => {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        response.json({
            error: 'El ID no es válido.'
        });
    }
    else {
        productModel.find({
            store_id: request.params.id
        })
        .then(products => {
            if (products.length === 0) {
                throw 'La tienda no posee productos registrados.'
            }
            else {
                response.send(products);
            }
        })
        .catch(error => {
            response.json({
                error
            });
        });
    }
});

router.get('/products/:id', (request, response) => {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        response.json({
            error: 'El ID no es válido.'
        });
    }
    else {
        productModel.findOne({
            _id: request.params.id
        })
        .then(product => {
            if (!product) {
                throw 'El producto no existe.'
            }
            else {
                response.send(product);
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