const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    arquivo: String,
    titulo: String,
    texto: String,
    enviado: {type: Date, default: Date.Now}
})

const noticias = mongoose.model('noticias', modelo)

module.exports = noticias