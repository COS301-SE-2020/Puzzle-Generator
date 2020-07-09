var http = require('http');
var fs = require('fs');
//var io = require('socket.io')(http);
var app = require('express')(http);
var url = require('url');
//var time = require('time');
//*/

const PORT = process.env.port || 3200;
//api = require("./loginAPI");
module.exports = {
    app: app
};

class Server{

    constructor(app,port){
        this.app = app;
        this.app.listen(port, function(){
            console.log("Listening on port "+port);

        });
    }

    static getInstance(app,port){
        if(this.instance){

            return this.instance;
        }
        else{
            return new Server(app,port);
        }

    }

    static setEnvironment(express, filesys, httpModule, urlModule){
        this.app = express;
        this.fs = filesys;
        this.http = httpModule;
        this.url = urlModule;
    }
}
/*
function getInstance(app, PORT){
    return Server.getInstance(app,PORT);
}

module.export(this);
*/

//app.listen(PORT);

app.get('/',(req,res)=>{
    console.log(req.url);
    switch (req.url) {
        case "/css/style.css":{
            fs.readFile('/css/style.css', function(err, data) {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 Not Found");
                    console.log(err)
                } else {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    // console.log(data);
                    res.write(data);
                }
            });

        }
        case "/":{
            console.log(req.url);
            fs.readFile('index.html', function(err, data) {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 Not Found");
                    console.log(err)
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    // console.log(data);
                    res.write(data);
                }
            });
        }

    }
  // res.sendFile(__dirname+"/CSS/style.css");
});
/*
app.get('/',  (req, res) =>{

    res.sendFile(__dirname+"/"+"index.html");
    /*res.sendFile(__dirname+"/"+"css/style.css");
    */
    /*fs.readFile('index.html', function(err, data) {
        if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/css'});
            return res.end("404 Not Found");
            console.log(err)
        }else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            // console.log(data);
            res.write(data);
        }
        res.end();
    });*
});*/


app.listen(PORT, function(){
    console.log("Listening on port "+PORT);
});

//var svr = Server.instance(app, PORT);

/*
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + "/index.html";
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(PORT);
*/





/*
serv.app.get("/CSS/styles.css", function (res,req) {
    /*fs.readFile('/CSS/style.css', function(err, data) {
        if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/css'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });*

});
/*
/*serv.app.get("/", function (res,req) {
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
            console.log(err)
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            // console.log(data);
            res.write(data);
        }
        res.end();
    });
});

/*
http.createServer(function (req, res) {
    /*res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');*/
   // var qry  = url.parse(req.url, true);
   /* fs.readFile('/CSS/style.css', function(err, data) {
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
       /* if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
            console.log(err)
        }else */
        /*{
            res.writeHead(200, {'Content-Type': 'text/html'});
            console.log(data);
            res.write(data);
        }
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
/*
}).listen(PORT, function(){
    console.log("Listening on port "+PORT);
});
/*
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});
*/
