const mongoose = require('mongoose');

const Users = mongoose.model('users');

module.exports = (app) => {
    app.post('/api/login', (request, response) => {
        Users.findOne({
            username: request.body.username
        })
        .then(document => {
            if (!document) {
                throw 'El usuario no es válido.';
            }
            else if (document.password !== request.body.password) {
                throw 'La contraseña no es correcta.';
            }
            else {
                response.json({
                    _id: document._id
                });
            }
        })
        .catch(error => {
            response.json({
                error
            });
        });
    });
}