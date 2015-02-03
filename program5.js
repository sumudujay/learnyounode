const fs = require('fs');

//console.log(fs.readdirSync(process.argv[2]));
if (!process.argv[2]) {
  throw "A filename must be provided";
}

if (!process.argv[3]) {
  throw "A filter must be provided";
}

var regex = "^.*\\." + process.argv[3] + "$";

fs.readdir(process.argv[2], function(err, list) {
  for (var i = 0; i < list.length;i++) {
    if (list[i].search(regex) != -1) {
      console.log(list[i]);
    };
  }
});
