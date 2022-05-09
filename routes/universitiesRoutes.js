 const router = require('express').Router()

 const Universities = require('../models/Universities')
 
    // Routes API //

app.post('/', async(req, res) => {

    // req.body //

    const {alpha_two_code, web_pages, name, country, domains, state} = req.body

    // Tratamento de erros //

    if(!name) {
        
        res.status(422).json({error: ' O nome é obrigatório!'})
    }

    const universities = {
        alpha_two_code,
        web_pages,
        name,
        country,
        domains,
        state
    }

    try {

        // Criando os dados //

        await Person.create(universities)

        await Universities.create(json)

        res.status(201).json({message: 'Universidade Inserida com Sucesso'})

    } catch(error) {

        res.status(500).json({error: error})
    }
    
})

module.exports = router