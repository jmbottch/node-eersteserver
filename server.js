var http = require('http');

http.createServer(function(request, response){
	console.log('er was een request');
	response.writeHead(200,{'Content-Type':'text/html'});
	var json = JSON.stringify({
		tekst:"Dit is JSON"
	});
	response.end(json);
}).listen(process.env.PORT || 3000);

console.log('de server luistert op port 3000');