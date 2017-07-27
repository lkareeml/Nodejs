var http = require("http");
var port = process.argv[2];


var server = http.createServer(function(request,response){
    if(request.method == 'POST')
    {
        var alldata = '';
        request.setEncoding('utf8');
        request.on('data',function(chunk){
          alldata += chunk; 
        });
         request.on('end',function(){
           alldata = alldata.toUpperCase();
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write(alldata,'utf8',function(){
              response.end();
           });
      });
    }
});

server.listen(port);
