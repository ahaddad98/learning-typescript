const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    let path = './views/';
    // set header content type
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            fs.console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
});


server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});