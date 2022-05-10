// configurando os paramêtros iniciais //

const express = require('express')
const { json } = require('express/lib/response')
const mongoose = require('mongoose')
const app = express()

// Rota teste //

 app.get('/universities', (req, res) => {

// Mostrar Req teste //

    res.json({message: 'Requisição finalizada'})

})

// Rotas da API //

const universitiesRoutes = require('./routes/universitiesRoutes')

app.use('/universities', universitiesRoutes)

// Padrão JSON para leitura dos dados //

app.use(

    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// Recebendo os dados com a port e a String de conexão com o database //

const usuarioDataBase = 'LucasPetris'
const senhaDataBase = encodeURIComponent('---')

mongoose

    .connect(

        `mongodb+srv://${usuarioDataBase}:${senhaDataBase}@mongodbcluster.hdodx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    )

    .then(() =>{

    console.log('Conexão estabelecida com o database')
    app.listen(3000)

    })

    .catch((err) => console.log(err))


