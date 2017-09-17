let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let dateHelper = require('./server/helpers/date');

let people = {};
let rooms = {};
let clients = [];

app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});

io.on("connection", function (client) {
    client.on("join", function(name){
        people[client.id] = name;
        client.emit("update", "You have connected to the chat.");
        client.broadcast.emit("update", name + " has joined the server.");
        io.sockets.emit("update-people", people);
    });

    client.on("send", function(msg){
        client.broadcast.emit("chat message", people[client.id], msg, dateHelper.getCurrentTime());
    });

    client.on("disconnect", function(){
        client.broadcast.emit("update", people[client.id] + " has left the chat.");
        delete people[client.id];
        io.sockets.emit("update-people", people);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});