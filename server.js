var http = require('http');
var server = http.createServer();
server.on('request', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello world !!!');
  res.end();
});
server..listen(process.env.PORT || 5000)
console.log("server listening ...");

