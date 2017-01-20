var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function(req, res){
  fs.readFile(__dirname + '/public_html/index.html', 'utf-8', function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('not found !');
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

});
//server.listen(process.env.PORT || 5000)
server.listen(1337, '172.16.8.215');
console.log("server listening ...");


