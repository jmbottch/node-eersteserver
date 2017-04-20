var http = require('http');

function onRequest(request, response){
	console.log('er was een request');
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('<h1>hello world!</h1>');
	response.end();
}

http.createServer(onRequest).listen(3000);

console.log('de server luistert op port 3000');