const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta

app.get('/', (req, res)=>{
    res.send('servidor funcionando em http://localhost:' + porta)
})

app.listen(porta)