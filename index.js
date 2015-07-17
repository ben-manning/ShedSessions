// setting up boilerplate

var express = require('express'),
				app = express(),
bodyParser  = require('body-parser');

// using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000, function() {
	console.log('Server is running.');
});

// routing

app.get("/", function(req,res) {
	res.send("Index route is working!");
});

app.get("/sessions/1", function(req,res) {
	res.send("Individual Video Page is working.");
});

app.get("/favorites/user", function(req,res) {
	res.send("User favorites pages is working.");
});