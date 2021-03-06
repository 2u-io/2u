const mongoose = require('mongoose');

const Users = mongoose.model('users');

module.exports = (app) => {
    app.post('/api/login', (request, response) => {
        Users.findOne({
            username: request.body.username
        })
        .then(user => {
            if (!user) {
                throw 'El usuario no es válido.';
            }
            else if (user.password !== request.body.password) {
                throw 'La contraseña no es correcta.';
            }
            else {
                response.json({
                    _id: user._id,
                    username: user.username
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