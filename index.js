// configurando os paramêtros iniciais //

const express = require('express')
const { json } = require('express/lib/response')
const mongoose = require('mongoose')
const app = express()

const Universities = require('./models/Universities')

// padrão JSON para leitura dos dados //

app.use(

    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

    // Rota inicial HTTP //

app.get('/universities', (req, res) => {

    // Mostrar req teste //

    res.json({message: 'Requisição completa'})
}

    // Routes API //

app.post('/universities', async(req, res) => {

    // req.body //

    const {alpha_two_code, web_pages, name, country, domains, state} = req.body

    const universities = {
        alpha_two_code,
        web_pages,
        name,
        country,
        domains,
        state
    }

    try {

        await Universities.create(json)

        res.status(201).json({message: 'Universidade Inserida com Sucesso'})

    } catch(error) {

        res.status(500).json({error: error})
    }
    
})

// Recebendo os dados com a port e a String de conexão com o database //

const usuarioDataBase = '---'
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


