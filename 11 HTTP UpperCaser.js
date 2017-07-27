var http = require("http");
var port = process.argv[2];


var server = http.createServer(function(request,response){
    var alldata = '';
    request.setEncoding('utf8');
    request.on('data',function(chunk){
        alldata += chunk; 
    });
    request.on('end',function(){
        var x = alldata.toUpperCase();
        console.log(x);
        response.end();
    });
});

server.listen(port);
