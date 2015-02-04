var net = require('net');

var server = net.createServer(function (socket) {
  var date = new Date(year, month, day, hours, minutes, seconds, milliseconds)
  socket.write("")
}

server.listen(process.argv[2]);
