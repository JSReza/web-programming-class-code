/*
console.log('shinjuku station is the most used train station in the world');
console.log('2014 Forest Hills Drive went platinum with no features');
*/
/*
//same thing 
const square = x => x * x;
function square(x) {
    return x * x;
}
*/

const express = require('express')
const products = require('./controller/products')
const PORT = 8000

const app = express();

app.get('/', (req, res) => {
  res.send('Hello New Paltz, NY!!!')
})
.use('/api/v1/products', productsController)
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});



console.log('Hello World!')


/*
ways to send data to the server
*/  
// 1. query parameters
// 2. body
// 3. path parameters
// 4. headers


/* 
parts of a url

*/
