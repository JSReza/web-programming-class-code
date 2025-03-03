/*
console.log('shinjuku station is the most used train station in the world');
console.log('2014 Forest Hills Drive went platinum with no features');
*/
const express = require('express')
const PORT = 3000

const app = express()
app.get('/', (req, res) => {
  res.send('Hello New Paltz, NY!!!')
})

const http = app.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('2014 Forest Hills Drive went platinum with no features')
})
/*
//same thing 
const square = x => x * x;
function square(x) {
    return x * x;
}
*/
app.listen(PORT, () => {
    console.log('Server is listening on port', PORT)
});







