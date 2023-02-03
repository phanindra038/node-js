var http = require ('http');
var server = http.createServer(function (req,res){
    res.write("<html><body>hello world welocome to1 node.js</body></html>");
    res.end ();
})
server.listen(5000);
console.log ('server startesd');

// Another method 
var http = require ('http');
var server = http.createServer(function (request,response){
    response.write("<html><body> hai gug hello world welocome to1 node.js</body></html>");
   //res.end ();
})
server.listen(5001);
console.log ('server startesd');


