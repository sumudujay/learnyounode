var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString();
var total = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] == '\n') {
        total++;
    }
}

console.log(total);