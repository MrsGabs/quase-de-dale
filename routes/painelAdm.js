module.exports = (app) =>{
    app.get('/painelAdm', async (req, res)=>{
        var noticias = require('../model/noticias')
        var textImg = await noticias.find() 
        res.render('painelAdm.ejs',{textImg:textImg})
    })
}