// configurando os paramêtros iniciais //

const express = require('express')
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

// routes //

app.post('/universities', async (req, res) => {

const{id_Universidade, nameUniversidade, countryUniversidade, stateUniversidade} = req.body

if(!id_Universidade) {
    res.status(422).json({ error: 'O id deve ser encontrado'})
}

// tratamento de erros, campos não encontrados //

if(!nameUniversidade) {
    res.status(422).json({ error: 'O nome da universidade deve ser encontrado'})
}

if(!countryUniversidade) {
    res.status(422).json({ error: 'O país da universidade deve ser encontrado'})
}

if(!stateUniversidade) {
    res.status(422).json({ error: 'O estado da universidade deve ser encontrado'})
}

// ----------------------------------------- //

const universities = {

    id_Universidade,
    nameUniversidade,
    countryUniversidade,
    stateUniversidade
}

try {

    // Criação dos dados //
    await Universities.create(universities)

    res.status(201).json({message: 'Universidade inserida no sistema com sucesso!'})

} catch(error) {
    res.status(500).json({error: error})

    }

})
 
// ---------------------- //

// Rota inicial HTTP //

app.get('/', (req, res) => {

    // mostrar req teste //

    res.json({message: 'OI EXPRESS'})
})

// ---------------------- //



// recebendo os dados com a port e a String de conexão com o database //

const usuarioDataBase = 'LucasPetris'
const senhaDataBase = encodeURIComponent('senhaMONGODB')

mongoose

    .connect(

        `mongodb+srv://${usuarioDataBase}:${senhaDataBase}@mongodbcluster.hdodx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    )

    .then(() =>{

    console.log('Conexão estabelecida com o database')
    app.listen(3000)

    })

    .catch((err) => console.log(err))


