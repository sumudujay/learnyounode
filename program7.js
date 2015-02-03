const http = require('http');
const bl = require('bl');

var data1;

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function(err, data) {
    //console.log(data);
    data1 = data.toString();
  }));
  response.on('error', console.error)
});

setTimeout(function() { console.log(data1); }, 2000);
