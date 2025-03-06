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
const PORT = 8000

const app = express();

app.get('/', (req, res) => {
  res.send('Hello New Paltz, NY!!!')
})

// Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});



console.log('Hello World!')



