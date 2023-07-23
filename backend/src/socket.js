//socket io server file

module.exports = function(io) {
    io.on('connection', (socket) => {
    
        //recieve message from client
        socket.on('send-message', (message) => {
            msg={}
            msg.message=message.message;
            msg.sender=false
            socket.broadcast.emit('recieve-message', msg)
        })
        
    })
}
