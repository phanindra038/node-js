 var http = require('http');
var server = http.createServer(function(req,res){
    if (req.url == '/hi')
    {
        res.write('<html><body><h1>hi everyone</h1></body></html>');
        res.end();
    }
    else if(req.url== '/user')
    {
        res.write('<html><body><h1>this is user page</h1></body></html>');
        res.end();
    }
    else if(req.url== '/admin')
    {
        res.write('<html><body><h1> this is admin page</h1></body></html>');
        res.end();
    }
    else
    {
        res.write('<html><body><h1>this ia local host </h1></body></html>');
        res.end();
    }
})
server.listen(5052);
console.log('serve started');

var http = require('http');
var server = http.createServer(function(req,res){
    res.write('hai everyone ');
    res.end();

})
server.listen(5003);
