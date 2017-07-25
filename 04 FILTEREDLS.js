var fs = require('fs');
	const path = require('path');
	var arr =[];
	var argpath = process.argv[2];
	var extension = '.'+process.argv[3];
	fs.readdir(argpath,function(err,filenames){
		if(err){console.log(err);}
		else{
			for(var i=0;i<filenames.length;i++){
				if(path.extname(filenames[i]) == extension){
					console.log(filenames[i]);
				}
			}
		}
	});
