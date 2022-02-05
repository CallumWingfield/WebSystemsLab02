var http = require("http");
const PORT = process.env.PORT || 3000;
http.createServer(function (request, response) {
	
response.writeHead(200, {'Content-Type': 'text/plain'});

response.end('Hello World\n');
}).listen(PORT);


app.listen(PORT, () => {
 console.log(`Our app is running on port ${ PORT }`);
});


console.log('Server running at http://127.0.0.1:' + PORT);


