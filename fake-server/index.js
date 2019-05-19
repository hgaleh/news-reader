var express = require('express'); 
var request = require('request'); 
var app = express();

app.get('/getUrl', (req, res) => { 
	request( req.query.q , function (error, response, body) { 
		if (!error && response.statusCode === 200) {
			res.header('connection', response.headers['connection']);
			res.header('Content-Length', response.headers['content-length']);
			res.header('Content-Type', response.headers['content-type']);
			res.send(body); 
		} 
	}); 
});

app.listen(3030); 
console.log('Server running on port %d', 3030);