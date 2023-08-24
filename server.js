const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
let onlineUsers = [];

app.use(express.static(__dirname + "/public"));
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('user joined', (username) => {
        if (onlineUsers.indexOf(username) === -1) {
            onlineUsers.push(username);
            socket.username = username;
            io.emit('update userlist', onlineUsers);
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        if (socket.username) {
            onlineUsers = onlineUsers.filter(user => user !== socket.username);
            io.emit('update userlist', onlineUsers);
        }
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
