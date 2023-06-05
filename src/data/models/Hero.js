const mongoose = require('mongoose');

const Hero = mongoose.model('Hero', {
    name: String,
    password: String,
    confirm_password: String,
    email: String,
    cnpj: String,
    type_of_person: String,
    approved: Boolean
});

module.exports = Hero;