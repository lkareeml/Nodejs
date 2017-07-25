var http = require("http");
var counter = 0;
var dataArr = ['','',''];

function output(){
    if(counter == 3){
        dataArr.forEach(function(element){
            console.log(element);
        });
    }
}

http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    response.on('data', function(dataPart) {dataArr[0] += dataPart;});
    response.on('end', function(){counter++;output();});
});

http.get(process.argv[3],function(response){
    response.setEncoding('utf8');
    response.on('data', function(dataPart) {dataArr[1] += dataPart;});
    response.on('end', function(){counter++;output();});
});

http.get(process.argv[4],function(response){
    response.setEncoding('utf8');
    response.on('data', function(dataPart) {dataArr[2] += dataPart;});
    response.on('end', function(){counter++;output();});
});
