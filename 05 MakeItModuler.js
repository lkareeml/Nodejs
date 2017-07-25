///First This is My Module :
var fs = require("fs");
var path = require("path");
var arr = [];
var filter = function(argPath,argExt,callbackfun){
  fs.readdir(argPath,function(err,data){
    if(err) return callbackfun(err);
    else{
      for(var i = 0;i < data.length; i++){
        if(('.' + argExt) == path.extname(data[i])){
          arr.push(data[i]);
        }
      }
      callbackfun(null,arr);
    }
  });
};
module.exports = filter;
//END

//Calling the module :

var FilterFiles = require("./FilterFiles");
var arg1_path = process.argv[2];
var arg2_extension  = process.argv[3];
var callbackfun = function(err,data){
  if(err == null){
    for(var x = 0;x < data.length;x++){
		  console.log(data[x]);
		}
	}
	else{
	  console.log("error");
	}
};
FilterFiles(arg1_path,arg2_extension,callbackfun);
//END
