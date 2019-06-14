const mongoose = require('mongoose');

const Products = mongoose.model('products');

module.exports = (app) => {
    app.get('/api/products', (request, response) => {
        Products.find({})
        .then(products => {
            if (products.length === 0) {
                throw 'No existen productos registrados.'
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
    });

    app.get('/api/products/:id', (request, response) => {
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            response.json({
                error: 'El ID no es válido.'
            });
        }
        else {
            Products.findOne({
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

    app.get('/api/store/:id/products', (request, response) => {
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            response.json({
                error: 'El ID no es válido.'
            });
        }
        else {
            Products.find({
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

    app.get('/api/store/:store_id/products/:product_id', (request, response) => {
        if (!mongoose.Types.ObjectId.isValid(request.params.store_id) || !mongoose.Types.ObjectId.isValid(request.params.product_id)) {
            response.json({
                error: 'El ID no es válido.'
            });
        }
        else {
            Products.findOne({
                _id: request.params.product_id,
                store_id: request.params.store_id
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
}