var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var dirPath = process.argv[3];

var server = http.createServer(function(request,response){
    //response.writeHead(200,{'content-type':'text/plain'});
    var src = fs.createReadStream(dirPath);
    src.pipe(response);
});

server.listen(port);
