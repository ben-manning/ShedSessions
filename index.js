// setting up boilerplate

var express = require('express'),
				app = express(),
bodyParser  = require('body-parser');

// using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// use for static assets
app.use(express.static(__dirname + '/public'));



app.listen(3000, function() {
	console.log('Server is running.');
});

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// routing

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/sessions/1", function(req,res) {
	res.send("Individual Video Page is working.");
});

app.get("/favorites/user", function(req,res) {
	res.send("User favorites pages is working.");
});