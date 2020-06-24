var http = require('http');

const PORT = process.env.port || 3200

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(PORT); 