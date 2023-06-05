const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    password: String,
    confirm_password: String,
    email: String,
    cpf: String,
    type_of_person: String,
    approved: Boolean
})

module.exports = Person;