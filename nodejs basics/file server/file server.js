var http = require('http');
var fs = require ('fs');
var url = require ('url');

http.createServer((req,res)=>{
    var q = url.parse(req.url,true);
    var fname = "."+q.pathname;
    fs.readFile(fname,(err,data)=>{
        if (err)
        {
            res.writeHead(404,{'conent text' : 'text/html '});
            return res.end("404.file not found")
        }
        else {
            res.writeHead(200,{'content text' : 'text/html'});
            res.writeHead('<h1>+data+</h1>');
            return res.end;

        }
    
     
})
}).listen(5003);
console.log('server stsrted');