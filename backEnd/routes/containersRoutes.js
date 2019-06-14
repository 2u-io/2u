const mongoose = require('mongoose');

const Containers = mongoose.model('containers');

module.exports = (app) => {
    app.get('/api/containers', (request, response) => {
        Containers.find({})
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

    app.get('/api/containers/:id', (request, response) => {
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            response.json({
                error: 'El ID no es válido.'
            });
        }
        else {
            Containers.findOne({
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
}