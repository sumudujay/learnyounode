var net = require('net');

function dd(value) {
  var valueStr = value.toString();

  if (valueStr.search(/^\d$/i) == -1) { return value; }
  else {return "0" + valueStr; }
}


var server = net.createServer(function (socket) {
 var date = new Date();

 socket.end(date.getFullYear() + "-" + dd(date.getMonth()+1) + "-" +
   dd(date.getDate()) + " " + dd(date.getHours()) + ":" + dd(date.getMinutes()) + "\n");
});

server.listen(Number(process.argv[2]));
