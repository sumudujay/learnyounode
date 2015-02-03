module.exports = function(directoryName, filter, callBack) {
  const fs = require('fs');
  var regex = "^.*\\." + filter + "$";
  var filteredList = [];

    fs.readdir(directoryName, function(err, list) {
      if (err) {
        return callBack(err);
      } else {
        for (var i = 0; i < list.length;i++) {
          if (list[i].search(regex) != -1) {
            filteredList.push(list[i]);
          };
        }
        return callBack(null,filteredList);
      }
    });
}
