var fs = require('fs');

var total = 0;

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    
    for (var i = 0; i < data.length; i++) {
        if (data[i] == '\n') {
            total++;
        }
    }
    
    console.log(total);
});