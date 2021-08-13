const log = console.log;

const http = require('http');
const PORT = 8080;
const fs = require('fs');

const server = http.createServer;

server((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
}).listen(PORT, (error) => {
    if (error) throw error;
    else {
        log(`SERVER IS LISTENING ON PORT ${PORT}`);
    }
})




