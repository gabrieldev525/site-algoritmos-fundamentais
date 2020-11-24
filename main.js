// importações
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

// configurações
app.use(bodyParser.json())
app.use('/static', express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// cria as rotas
app.get('/', (req, res) => {
  res.render('index')
})

// inicia o servidor
const port = 3000
app.listen(port, () => console.log(`app running at http://localhost:${port}`))