const mongoose = require('mongoose');

const Wrappings = mongoose.model('wrappings');

module.exports = (app) => {
    app.get('/api/wrappings', (request, response) => {
        Wrappings.find({})
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

    app.get('/api/wrappings/:id', (request, response) => {
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            response.json({
                error: 'El ID no es válido.'
            });
        }
        else {
            Wrappings.findOne({
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
}