# readdir-recursive
Recursive directory search

Demo:

 git clone https://github.com/thanhthinhmai/readdir-recursive.git

Main features:

 - Yêu cầu tham chiếu với modul.
	var fs = require(‘fs’);
	var path = require(‘path’);
 - Khai báo biến walk = function.
	var walk = function(dir,name);
 - Hàm đọc file.
	fs.readdir(dir,function(err,list){
		
		// Do something
		
         });
Test directory:
	walk(‘/url’,function(err,result){
              
	//Do something
});
