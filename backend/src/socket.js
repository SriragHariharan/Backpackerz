//socket io server file

module.exports = function(io) {
    io.on('connection', (socket) => {

        //here we get the id of the user from the frontend and create a unique room from it
        const id = socket.handshake?.query.userID
        socket.join(id);

        //recieve message from client
        socket.on('send-message', ({message, sender, receiver, members}) => {
            msg={}
            msg.message=message;
            msg.sender=sender;
            msg.receiver=receiver;
            msg.members=members;
            msg.createdAt = Date.now()
            socket.to(receiver).emit('get-message',msg);
        })
        
    })
}
