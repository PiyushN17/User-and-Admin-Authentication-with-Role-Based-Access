// let url = require('url');
// let http = require('http');

// let server = http.createServer((req, res) => {
//     let path = req.url;
//     if(path === '/'){
//         res.end('Yooooo, wassupppp');
//     }
//     else if(path === '/products') {
//         res.end('You are in product');
//     }
//     else if(path === '/register') {
//         res.end('You need to register bro');
//     }
//     else {
//         res.end('idk where you are bro');
//     }
// });

// server.listen(5050, '127.0.0.1', () => {
//     console.log('Listening from 5050');
// })

const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
    res.end('Express is up!');
})

app.listen(5050, '127.0.0.1', () => {
    console.log('Listening from 5050');
})