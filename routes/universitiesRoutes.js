 const router = require('express').Router()

const res = require('express/lib/response')
 const Universities = require('../models/Universities')
 
// Routes API //

router.post('/', async(req, res) => {

// Criação dos parametros do Req.body //

    const {alpha_two_code, web_pages, name, country, domains, state} = req.body

// Tratamento de erros //

    if(!name) {
        
        res.status(422).json({error: ' O nome é obrigatório!'})
    
    return

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

        await Universities.create(universities)

        await Universities.create(json)

        res.status(201).json({message: 'Universidade Inserida com Sucesso'})

    } catch(error) {

        res.status(500).json({error: error})
    }
    
})

// Leitura dos dados //

router.get('/', async (req, res) => {

    try {

        const universities = await Universities.find()

        res.status(200).json(universities)

    } catch(error) {
        res.status(500).json({error: error})
    }
})

// Filtragem de Busca por Id da Universidade //

router.get('/:id', async (req, res) => {

    const id = req.params.id

try {
    const universities = await Universities.findOne({_id: id})

    if(!universities) {
        res.status(422).json({message: 'O id da universidade não foi encontrada'})
        return
    }

    res.status(200).json(universities)

} catch(error) {
    res.status(500).json({error: error})

}

})

// Update - atualização de dados (PUT)

router.patch('/universities/:id', async(req, res) => {

    const id = req.params.id

    const { web_pages, name, domains } = req.body

    const universities = {
        web_pages,
        name,
        domains
    }

    try {

        const updateUniversities = await universities.updateOne({_id: id}, universities)

        console.log(updateUniversities)

        if(updateUniversities.matchedCount === 0) {
            res.status(422).json({ message: 'A universidade não foi encontrada'})
            
        }

        res.status(200).json(universities)

    } catch(error) {
        res.status(500).json({ error: error })
    }
})

// Delete - deletar dados //

router.delete('/universities/:id', async(req, res) => {

    const id = req.params.id

    const universities = await Universities.findOne({_id: id})

    if(!universities) {
        res.status(422).json({message: 'A universidade não foi encontrada'})
    return 
    
    }

    try {

        await Universities.deleteOne({_id: id})

        res.status(200).json({message: 'A universidade foi removida'})
        
    } catch (error) {
        res.status(500).json({ error: error })

    }
})

module.exports = router