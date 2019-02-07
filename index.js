const express = require('express');
const app = express();

var port = 1025;

app.get('/', function helloWorld(request, response) {
	response.send(`
		<h1 style="color:peru">Hello World!</h1>
	`);
});

app.listen(port, '0.0.0.0', function logWhenRunning() {
	console.log('Ekta tester is running on port ' + port);
});
