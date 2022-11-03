const conexao = require("../config/database")

module.exports = (app) =>{
    app.get('/news', async (req, res)=>{
        conexao()

        let id = req.query.id

        var noticias = require('../model/noticias')
        //PEGA O ID DA IMAGEM DENTRO DO BANCO DE DADOS GRAÇAS A DEUS, OBRIGADO SOPA GAMER
        var textImg = await noticias.findOne({_id:id})
        res.render('news.ejs',{textImg:textImg})
    })
}