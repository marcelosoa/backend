const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    password: String,
    confirm_password: String,
    email: String,
    cpf: String,
    type_of_person: String,
    approved: Boolean
})
module.exports = User;