/*
console.log('2014 Forest Hills Drive went platinum with no features');
*/
const server = require('http');
const PORT = 3000;

const http = server.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('2014 Forest Hills Drive went platinum with no features');
})
/*
//same thing 
const square = x => x * x;
function square(x) {
    return x * x;
}
*/
http.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
});



