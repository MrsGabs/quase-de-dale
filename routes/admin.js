const multer = require('multer')
const fs = require('fs')
const { setFlagsFromString } = require('v8')

module.exports = (app)=>{
   
    //importar o database
    var database = require('../config/database')

    //importar o model da galeria
    var noticias = require('../model/noticias')
    
    app.get('/admin',async(req,res)=>{
        //conectar database
        database()
        var documentos = await noticias.find().sort({_id:-1})
        res.render('admin.ejs', {dados:documentos})
    })
    

var upload = require('../config/multer')


    app.post('/admin', (req,res)=>{
    //upload das imagens
        upload(req, res, async(err)=>{
            if(err instanceof multer.MulterError){
                res.send("arquivo muito grande")
            }else if(err){
                res.send("tipo de arquivo invalido")
            }else{
                database()
                var documento = await new noticias({
                    titulo:req.body.titulo,
                    texto:req.body.texto,
                    arquivo:req.file.filename
                    }).save()
                    .then(()=>{res.redirect('/admin')})
                    .catch(()=>{res.send('Não foi possível salvar')}) 
    
            }
        })
    })

    app.get('/noticias_alterar', async(req, res)=>{
    
        //recuperar o parametro id da barra de endereço
        var id = req.query.id
    
        //procurar por um documento com o id
        var busca = await noticias.findOne({_id:id})
    
        
        //abrir o arquivo
        res.render('noticias_alterar.ejs', {dados:busca})
    })
    
    //alterar a imagem gravada no documento
    app.post('/noticias_alterar',(req,res)=>{
        var id = req.query.id

        var dados = req.query
        console.log(dados)
            //upload das imagens
            upload(req,res,async (err)=>{
                if(err instanceof multer.MulterError){
                    res.send("O arquivo é maior que 100kb")
                }else if(err){
                    res.send('Tipo de Arquivo inválido')
                }else{
                    //conectar ao database
                    database()
                    //excluir o arquivo anterior
                    try {
                        fs.unlinkSync('uploads/' + req.body.anterior)
                    } catch (error) {
                        //console.log(error)
                    }
    
                    //alterar o nome do arquivo na coleção
                    var documento = await noticias.findOneAndUpdate({_id:id},
                        {arquivo:req.file.filename,
                        titulo:req.query.titulo, 
                        texto:req.query.texto})
                    res.redirect('/admin')
    
                }
            })
        })
    
}
