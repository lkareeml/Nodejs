var http = require("http");
var counter = 0;
var fullData = '';

http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    response.on('data', function(dataPart) { 
        counter += dataPart.length;
        fullData += dataPart;
    });
    response.on('end', function(){
        console.log(counter);
        console.log(fullData);
    });
});
