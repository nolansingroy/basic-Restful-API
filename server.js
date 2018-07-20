const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);

/* solution to mocha server test */

/*
function makeServer() {
  var express = require('express');
  var app = express();
  app.get('/', function (req, res) {
    res.status(200).send('ok');
  });
  var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
  });
  return server;
}
module.exports = makeServer;
*/
