const http = require('http');
const bl = require('bl');


function DataStore() {
  this.data1 = null;
  this.data2 = null;
  this.data3 = null;
}

var ds = new DataStore();

var GrabData = function(ds, url, position) {
  http.get(url, function(response) {
  response.pipe(bl(function(err,data) {
    if (position === 1) { ds.data1 = data.toString();}
    if (position === 2) { ds.data2 = data.toString();}
    if (position === 3) { ds.data3 = data.toString();}
  }));
  response.on('error', console.error);
  });
}

GrabData(ds, process.argv[2], 1);
GrabData(ds, process.argv[3], 2);
GrabData(ds, process.argv[4], 3);


var intervalTimer = setInterval(function() { printOut(); }, 1000);

function printOut() {
  if (ds.data3) { 
    if (ds.data2) {
      if (ds.data1) {
        console.log(ds.data1);
        console.log(ds.data2);
        console.log(ds.data3);
        
        clearInterval(intervalTimer);
      }
    }
  }
}

