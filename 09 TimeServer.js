var net = require("net");
//var strftime = require('strftime') 
var port = process.argv[2];

var date = new Date();
var y = date.getFullYear();
var mo = crr(date.getMonth()+1);
var d = crr(date.getDate());
var h = date.getHours();
var min = date.getMinutes();
var fullDate = y + '-' + mo + '-' + d + ' ' + h + ':' + min;

// "YYYY-MM-DD hh:mm"  
// "2013-07-06 17:42"  

function crr(num){
    if(num <=9)
        return ('0' + (num));
    else return num;
}

var netserver = net.createServer(function(socket){
    socket.setEncoding('utf8');
    socket.write(fullDate);
    socket.end('\n');
});
netserver.listen(port);
