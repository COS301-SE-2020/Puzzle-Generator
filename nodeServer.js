var http = require('http');
var fs = require('fs');
var io = require('socket.io')(http);
var app = require('express')(http);
var url = require('url');
//var time = require('time');

http.createServer(function (req, res) {
    /*res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');*/
    var qry  = url.parse(req.url, true);
    fs.readFile('WCStyles.css', function(err, data) {
        if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/css'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

    fs.readFile('clock.html', function(err, data) {
        if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });


    app.get('/', function (req, res) {

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
}).listen(8881, function(){
    console.log("Listening on port 8881");
});


