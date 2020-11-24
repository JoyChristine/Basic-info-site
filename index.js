const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    if (req.url === './') {
        fs.readFile('./Index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        })
    } else if (req.url === '/About') {
        fs.readFile('./About.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        })
    } else if (req.url === '/Contact') {
        fs.readFile('./Contact.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        })
    } else if (req.url === '/404') {
        fs.readFile('./404.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        })
    }
}).listen(8080);