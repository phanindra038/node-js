/* var fs = require('fs');
 fs.readFile('mycontent.txt', function(err)
 {
    if(err)
    throw err;
    console.log('readfile ')
 }); */

 var fs = require('fs');
 fs.readFile('mycontent.txt',function(err,data){
    if(err)
    throw err;
    console.log(data.toString('utf-8'));
 });
 
 var fs = require('fs');
 fs.readFile('mycontent.txt', 'utf8',function(err,data){
   
    console.log(data);
 });