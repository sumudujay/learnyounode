var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    return console.error('Some error occured:', err);
  }

  data.forEach(function(line) {
    console.log(line);
  });
  
});
