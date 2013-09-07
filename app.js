var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , xPos = 0
    , yPos = 0

app.use(express.static('scripts'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html')
});



server.listen(3000);


// start coding