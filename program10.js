var net = require('net');

//var server = net.createServer(function (socket) {
//  var date = new Date();
//  
//  socket.write("")
//}
//
//server.listen(process.argv[2]);

function makeTwoDigits(value) {
  var valueStr = value.toString();
  
  if (value.search(/\d/i) == -1) { return value; }
  else {return "0" + value; }
}


var date = new Date();

console.log(makeTwoDigits(date.getDate()));