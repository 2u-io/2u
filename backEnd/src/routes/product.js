const express = require('express');
const mongoose = require('mongoose');

const productModel = require('../models/Products');

const router = express.Router();

router.get('/store/:id/products', (request, response) => {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        response.json({
            error: 'El ID de la tienda no es válido.'
        });
    }

    const query = {
        store_id: request.params.id
    };

    productModel.find(query, (error, products) => {
        if (error) {
            response.json({
                error
            });
        }
        else if (products.length === 0) {
            response.json({
                error: 'La tienda no posee productos registrados.'
            });
        }
        else {
            response.send(products);
        }
    });
});

router.get('/products/:id', (request, response) => {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        response.json({
            error: 'El ID del producto no es válido.'
        });
    }
    else {
        const query = {
            _id: request.params.id
        };
    
        productModel.findOne(query, (error, product) => {
            if (error) {
                response.json({
                    error
                });
            }
            else if (product === null) {
                response.json({
                    error: 'El producto no existe.'
                });
            }
            else {
                response.send(product);
            }
        });
    }
});

module.exports = router;