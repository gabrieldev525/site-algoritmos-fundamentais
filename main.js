// importações
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');

// algorithm routes
const ALGORITHM_ROUTES = require('./algorithms_routes').ALGORITHM_ROUTES

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

// Create algorithms routes based at contants
const routes_keys = Object.keys(ALGORITHM_ROUTES)
routes_keys.forEach(item => {
  const curr = ALGORITHM_ROUTES[item]

  // create algorithm GET router
  app.get(curr.url, (req, res) => {
    res.render('algorithm', {
      menu: true,
      ...curr
    })
  })

  // create algorithm POST router to treat the result
  app.post(curr.url, (req, res) => {

    let params = []
    // get params depending from form type
    if(curr.form_type == 'number') {
      // input number can have many fields
      for(let i = 1; i <= curr.input_count; i++) {
        params.push(req.body['num' + i])
      }
    } else if(curr.form_type == 'number_list')
      params.push(req.body.num_list.trim().split(','))

    // call algorith method to get the result
    let result = curr.algorithm(...params)

    // if the route has a treatment in result, call the function defined in the constants
    if(curr.format_result)
      result = curr.format_result(result)

    // render the view with response
    res.render('algorithm', {
      result,
      ...curr
    })
  })
})

// inicia o servidor
const port = process.env.PORT || 3000
app.listen(port)