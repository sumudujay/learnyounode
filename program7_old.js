const http = require('http');
var responseData = "";
var characterCount = 0;


http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    responseData += data;
    characterCount += data.length;
  });
  response.on('error', console.error);

  response.on('end', function() {
    console.log(characterCount);
    console.log(responseData);
  });
});
