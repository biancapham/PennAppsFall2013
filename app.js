var mongoose = require("mongoose");

mongoose.connect("localhost", "Flyerthing");

mongoose.connection.once("open", function(){
	console.log("connected to database");
	});

var Flyer = require("./flyer");

var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , xPos = 0
    , yPos = 0

app.use(express.static('scripts'))
app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html')
});

// Static Route -- Change to real Data
app.get('/api/flyers', function(req, res){
    res.sendfile(__dirname + '/flyers.json')
});


// Static Route -- Change to real Data
app.get('/api/add-flyer', function(req, res){
});

app.get('/flyers.json', function(req, res){
	Flyer.find({
	}, function(error, results){
		var output = []; 
		results.forEach(function(result){
			output.push(result.toObject({
			virtuals: true
				})
			);
		res.send(output);
		});
	    });
	});


app.post("/create", function(req, res) {
	var flyer = new Flyer();
        flyer.title = req.body.title
	flyer.description = req.body.description;
	flyer.imgage = req.body.image;
	flyer._date = req.body.date;
        flyer.save(function(error, flyer){
		res.send(flyer.toObject());
		});
	
	
	//report.save( function(err, report) {
	//if (err) return handleError(err);
	
	});


server.listen(3000);


// start coding
