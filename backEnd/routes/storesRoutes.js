const mongoose = require('mongoose');

const Stores = mongoose.model('stores');

module.exports = (app) => {
    app.get('/api/stores', (request, response) => {
        Stores.find({})
        .then(stores => {
            if (stores.length === 0) {
                throw 'No existen tiendas registradas.'
            }
            else {
                response.send(stores);
            }
        })
        .catch(error => {
            response.json({
                error
            });
        });
    });

    app.get('/api/stores/:id', (request, response) => {
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            response.json({
                error: 'El ID no es válido.'
            });
        }
        else {
            Stores.findOne({
                _id: request.params.id
            })
            .then(store => {
                if (!store) {
                    throw 'La caja o bolsa de regalo no existe.'
                }
                else {
                    response.send(store);
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