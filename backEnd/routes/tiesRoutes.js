const mongoose = require('mongoose');

const Ties = mongoose.model('ties');

module.exports = (app) => {
    app.get('/api/ties', (request, response) => {
        Ties.find({})
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

    app.get('/api/ties/:id', (request, response) => {
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            response.json({
                error: 'El ID no es válido.'
            });
        }
        else {
            Ties.findOne({
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
}