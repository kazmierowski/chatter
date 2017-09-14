let express = require('express');
let app = express();
let http = require('http').Server(app);
let socket = require('socket.io')(http);

let people = {};
let rooms = {};
let clients = [];

app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});

socket.on("connection", function (client) {
    client.on("join", function(name){
        people[client.id] = name;
        client.emit("update", "You have connected to the server.");
        socket.sockets.emit("update", name + " has joined the server.");
        socket.sockets.emit("update-people", people);
    });

    client.on("send", function(msg){
        socket.sockets.emit("chat message", people[client.id], msg);
    });

    client.on("disconnect", function(){
        socket.sockets.emit("update", people[client.id] + " has left the server.");
        delete people[client.id];
        socket.sockets.emit("update-people", people);
    });
})
  .on('chat message', function(msg){
      socket.broadcast.emit('chat message', msg);
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});