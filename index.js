// configurando os paramêtros iniciais //

const express = require('express')
const app = express()

// padrão JSON para leitura dos dados //

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// route //

app.get('/', (req, res) => {

    // mostrar req teste //

    res.json({message: 'OI EXPRESS'})
})

// recebendo os dados com a port//

app.listen(3000)