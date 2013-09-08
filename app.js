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



server.listen(3000);


// start coding