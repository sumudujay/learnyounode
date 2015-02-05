var http = require('http');
var map = require('through2-map');

//var server = new http.createServer().listen(8000);

//server.on('request'), function

var server = new http.createServer(function(request, response) {
  if (request.method == 'POST') {
    //console.log("lala");

    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
      })
    ).pipe(response)
  }
});

server.listen(process.argv[2]);
