module.exports = (app) =>{
    app.get('/register', (req, res)=>{
        res.render('register.ejs')
    })


    app.post('/register', async(req, res)=>{
        var dados = req.body
        var database = require('../config/database')()
        var usuarios = require('../model/usuario')
        var verificar = await usuarios.findOne({email:dados.email})

        if(verificar){
            return res.send("Email já cadastrado")
        }

        var documentos = await new usuarios ({
            nome:dados.nome,
            email:dados.email,
            senha:dados.senha
        }).save()
        res.redirect('/')
    })
}