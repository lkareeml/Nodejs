var http = require("http");
var url = require('url');
var data = {};
var ok = '';

var server = http.createServer(function(request,response){
    if(request.method == 'GET'){
        var urlInfo = url.parse(request.url);
        var urlq = urlInfo.query.slice(4);
    
        if(urlInfo.pathname == '/api/parsetime'){
            var arr = urlq.slice(11).split(":");
            data = {
                "hour"   : parseInt(arr[0],10),
                "minute" : parseInt(arr[1],10),
                "second" : parseInt(arr[2],10)
            };
            ok = JSON.stringify(data);
            response.writeHead(200,{'Content-Type':'application/json'});
            response.write(ok,'utf8',function(){
                response.end();
            });
        }
        else if (urlInfo.pathname == '/api/unixtime'){
            var ndate = new Date(urlq);
            var result = ndate.getTime();
            data = {"unixtime":result};
            ok = JSON.stringify(data);
            response.writeHead(200,{'Content-Type':'application/json'});
            response.write(ok,'utf8',function(){
                response.end();
            });
        }
    }
});

//Listen to a port provided in command lint argument 2 
server.listen(process.argv[2]);
