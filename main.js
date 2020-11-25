// importações
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');

// math modules
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

// contagem
app.get('/contagem', (req, res) => {
  res.render('contagem', {
    menu: true,
    resultado: null
  })
})
app.post('/contagem', (req, res) => {
  const num = req.body.num
  const resultado = math.contagem(num)
  res.render('contagem', {
    menu: true,
    resultado
  })
})

// número primo
app.get('/primo', (req, res) => {
  res.render('primo', {
    result: null,
    menu:true
  })
})
app.post('/primo', (req, res) => {
  const result = math.isPrime(req.body.num)

  res.render('primo', {
    result: result ? 'O número não é primo' : 'O número é primo',
    menu:true
  })
})

// ordenação
app.get('/ordenacao', (req, res) => {
  res.render('ordenacao', {
    result: null,
    menu: true
  })
})
app.post('/ordenacao', (req, res) => {
  let num_list = req.body.num_list
  num_list = num_list.trim().split(',')
  num_list = num_list.map(n => parseInt(n))

  const result = math.quickSort(num_list)
  res.render('ordenacao', {
    result: result.join(', '),
    menu: true
  })
})


// inicia o servidor
const port = process.env.PORT | 3000
app.listen(port)