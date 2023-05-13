const http = require('http');

const server = http.createServer((req, res) => {
    if(req === '/') {
        res.end('Home Page');
    }
    if(req === '/about') {
        // blocking code
        for(let i=0; i<1000; i++) {
            for(let j=0; j<1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('about page');
    }
    res.end('Error Page');
});

server.listen(5000,() => {
    console.log('server listening on port 5000');
});