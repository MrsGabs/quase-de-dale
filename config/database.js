const mongoose = require('mongoose')

const conexao = async() =>{
    var atlas = await mongoose.connect('mongodb+srv://adm:adm@tccholas.m0t6j7m.mongodb.net/tcc')
}

module.exports = conexao