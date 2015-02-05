var http = require('http');
var fs = require('fs');
var bl = require('bl');

var server = new http.createServer(function(request, response) {
  var fileStream = fs.createReadStream(process.argv[3]);



  //response.setHeader("Content-Type", "text/html");

  // fileStream.pipe(bl(function (err, data) {
  //   response.write(data.toString());
  //   response.end();
  // }));

  fileStream.pipe(response);

});

server.listen(process.argv[2]);
