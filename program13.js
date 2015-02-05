var http = require('http');
var url = require('url');

var server = new http.createServer(function(request, response) {
  var urlObj = url.parse(request.url, true);
  
  
  if (urlObj.pathname == '/api/parsetime') {
    var hour;
    var minute;
    var second;
    
    // now get a date object with the time as requested in the query
    var date = new Date(urlObj.query.iso);
    
    var jsonObj = { 
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds(),
    };

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(jsonObj));
  } else if (urlObj.pathname == '/api/unixtime' ) {
    var hour;
    var minute;
    var second;
    
    // now get a date object with the time as requested in the query
    var date = new Date(urlObj.query.iso);
    
    var jsonObj = { 
      "unixtime": date.getTime()
    };
    
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(jsonObj));
  }
});

server.listen(Number(process.argv[2]));