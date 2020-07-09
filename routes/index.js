var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.url);
  /*fs.readFile('/public/index.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
      console.log(err)
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      // console.log(data);
      res.write(data);
    }
  });*/
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.render('src/index', { title: 'Prometheus puzzles' });

});

module.exports = router;
