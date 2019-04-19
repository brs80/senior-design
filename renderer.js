// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
      var function printFile() { 
        var fs = require('fs');
        fs.readFile('data.txt', function (err, data) {
          if (err)
            throw err;
          if (data) {
            var fileContent = data.toString('utf8');
            return fileContent;
          }
        });
      }