// importações
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');

// Módulo dos algorítmos
const math = require('./modules/math')

// variáveis de ambiente
require('dotenv').config()

// configurações
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('views', path.join(__dirname, '/views'))

// cria as rotas
app.get('/', (req, res) => {
  res.render('index', {
    menu:true
  })
})

app.get('/contagem', (req, res) => {
  res.render('contagem', {
    menu:true,
    resultado:null
  })
})

app.post('/contagem', (req, res) => {
  const num = req.body.num
  const resultado = math.contagem(num)
  res.render('contagem', {
    menu:true,
    resultado
  })
})
// inicia o servidor
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`app running at http://localhost:${port}`))