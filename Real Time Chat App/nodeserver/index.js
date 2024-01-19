const { Socket } = require('engine.io');

// node server which will handel socket connections
const io = require('socket.io')(9000)

const users = {};

io.on('connection', socket =>{
    Socket.on('new-user-joined',name =>{
        console.log("New user",name);
        user[socket.id] = name;
       Socket.broadcast.emit('user-joined',name);
    });
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message,name: user[socket.id]})
    });

})