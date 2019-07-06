const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
users = [];
connections = [];

app.use(express.static(__dirname));

server.listen(process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnected Sockets
    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function (data) {
        io.sockets.emit('new message', { msg: data });
    });
});
