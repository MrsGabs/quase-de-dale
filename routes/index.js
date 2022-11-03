const conexao = require("../config/database")

module.exports = (app) =>{
    app.get('/', async (req, res)=>{
        conexao()
        var noticias = require('../model/noticias')
        var textImg = await noticias.find().limit(6).sort({'_id':1})
        res.render('index.ejs',{textImg:textImg})
    })
}