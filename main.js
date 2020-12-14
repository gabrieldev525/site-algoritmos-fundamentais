// importações
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');
const firebase = require('firebase')

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

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
})

// cria as rotas
app.get('/', (req, res) => {
  const user = firebase.auth().currentUser

  res.render('index', {
    menu:true,
    currentUser: user
  })
})

// login
app.get('/login', (req, res) => {
  res.render('login', {
    layout: null
  })
})

app.post('/login', (req, res) => {
  const body = req.body
  const email = body.email
  const password = body.password

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // redirect user to home
      res.redirect('/')
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message

      console.log(`${errorCode} - ${errorMessage}`)
    })
})

// register
app.get('/register', (req, res) => {
  res.render('register', {
    layout: null
  })
})

app.post('/register', (req, res) => {
  const body = req.body
  const email = body.email
  const password = body.password
  const name = body.name

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // updating user display name after register
      const currentUser = firebase.auth().currentUser
      currentUser.updateProfile({
        displayName: name
      })
      .then(() => {
        console.log('Nome do usuário definido com sucesso')
      })
      .catch((error) => {
        console.log(error.message)
      })

      // redirect user to home
      res.redirect('/')
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message

      console.log(`${errorCode} - ${errorMessage}`)
    })
})

// logout
app.get('/logout', async (req, res) => {
  await firebase.auth().signOut()

  res.redirect('/')
})

// Create algorithms routes based at contants
const routes_keys = Object.keys(ALGORITHM_ROUTES)
routes_keys.forEach(item => {
  const curr = ALGORITHM_ROUTES[item]

  // create algorithm GET router
  app.get(curr.url, (req, res) => {
    const user = firebase.auth().currentUser

    res.render('algorithm', {
      menu: true,
      currentUser: user,
      ...ALGORITHM_ROUTES[req.url.substring(1)],
    })
  })

  // create algorithm POST router to treat the result
  app.post(curr.url, (req, res) => {
    const user = firebase.auth().currentUser

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
      currentUser: user,
      ...ALGORITHM_ROUTES[req.url.substring(1)]
    })
  })
})

// inicia o servidor
const port = process.env.PORT | 3000
app.listen(port)