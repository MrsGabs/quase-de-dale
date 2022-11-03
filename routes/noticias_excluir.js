module.exports = (app) =>{
    app.get('/noticias_excluir', (req, res)=>{
        res.render('noticias_excluir.ejs')
    })
}