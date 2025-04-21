/*
console.log('shinjuku station is the most used train station in the world');
console.log('2014 Forest Hills Drive went platinum with no features');

//same thing 
const square = x => x * x;
function square(x) {
    return x * x;
}
*/

const express = require('express')
const productsController = require('./controller/products')
const usersController = require('./controller/users')
require('dotenv').config()
const PORT = process.env.PORT = 8000

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello New Paltz, NY!!!')
})
.use('/api/v1/products', productsController)
.use('/api/v1/users', usersController)
.use('/', express.static('dist'))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
}
)
app.use(express.json())

app.use(req, res, next, err => {
    console.error(err)
    const status = err.status || 500
    res.status.status.send()
    console.log('Request Method:', req.method)
    next()
})
app 
.get('/hello', (req, res) => {
  res.send('Hello New Paltz, NY!!!')
})
app.listen(PORT, () => {
    console.log(`
      Welcome to the best class at New Paltz - ${process.env.BEST_CLASS}
      Server running at http://localhost:${PORT}/`)
});


/* 

Asynchronous JavaScript
  1. Callbacks
  2. Promises
  3. Async/Await(await creates a promise)
  4. Pipelines

  Ways to send data to the server
  1. PATH parameters: /users/123
  2. Query parameters: ?name=John&age=30
  3. Headers
    3.5. Cookies
  4. Request body: { "name": "John", "age": 30 }
    4.0. Form data: name=John&age=30
    4.5. JSON data: { "name": "John", "age": 30 }

  parts of a url
  1. Protocol: http:// or https://
  2. Domain: www.example.com
  3. Port: :80 or :443
  4. Path: /path/to/resource
  5. Query parameters: ?name=John&age=30
  6. Fragment: #section1

  example: https://www.example.com:80/path/to/resource?name=John&age=30#section1


  Module Types
    1. CommonJS:
      import: require('module')
      export: module.exports = { functions, variables, etc. }
    2. ES6:
      import: import { functions, variables, etc. } from 'module'
      export: export { functions, variables, etc. }
*/