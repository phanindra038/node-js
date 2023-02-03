var fs = require('fs');
//var content ='this is node js file';
var content = 'this is a rext file';
/*  fs.open('mycontent.js','w', function(err){
    if (err)
    throw err;
    console.log('file is created');
 })
  fs.writeFile('mycontent.js','console.log(js file)', function(err)
{
    if (err)
    throw err;
    console.log('nodejs fs file create');
});
 */ // open fs 
fs.open('mycontent.rext','w', function(err){
    if (err)
    throw err;
    console.log('file is created');
});
 // writefile fs
fs.writeFile('mycontent.rext',content, function(err){
    if (err)
    throw err;
    console.log('nodejs fs file created');
});
//  we can write any tect  in arrgiment 2  is its possiable ?
fs.writeFile('mycontent.txt','console.log(txt file)' , function(err)
{
    if (err)
    throw err;
    console.log('nodejs fs new file created');
});
// appendfile fs
 var content= "this ia appendfile"
 fs.appendFile('mycontent.txt' , content, function(err)
{
    if(err)
    throw err;
    console.log('append file is created');
});

