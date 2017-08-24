let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});