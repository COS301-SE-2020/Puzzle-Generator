var http = require('http');
var fs = require('fs');
//var io = require('socket.io')(http);
var app = require('express')(http);
var url = require('url');
//var time = require('time');
const PORT = process.env.port || 3200;

http.createServer(function (req, res) {
    /*res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');*/
   // var qry  = url.parse(req.url, true);
    fs.readFile('/CSS/style.css', function(err, data) {
        if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/css'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

    fs.readFile('index.html', function(err, data) {
        if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
            console.log(err)
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        console.log(data);
        res.write(data);
        res.end();
    });


    /*app.get('/', function (req, res) {

        if (req.param('q') == 'timezones') {

            fs.readFile('zone.json', function (err, data) {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/css'});
                    return res.end("404 Not Found");
                }
                res.writeHead(200, {'Content-Type': 'text/json'});
                res.write(data);
                res.end();
            });
        } else {
            var now = new time.Date();
            now.setTimezone(req.param('q'));
            res.send(now.getTime());
        }

    });

    /*app.get("/",function (req,res) {

        if(req.param('q')=='zone') {
            res.send(fs.readFile('zone.json'));
        }
        else
        {
            var now = new time.Date();
            now.setTimezone(req.param('q'));
            res.send(now.getTime());
        }

    });*/
}).listen(PORT, function(){
    console.log("Listening on port "+PORT);
});
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

