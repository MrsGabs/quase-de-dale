module.exports = (app) =>{
    app.get('/aboutus', (req, res)=>{
        res.render('aboutus.ejs')
    })
}