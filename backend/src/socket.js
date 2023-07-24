//socket io server file

module.exports = function(io) {
    io.on('connection', (socket) => {

        //here we get the id of the user from the frontend and create a unique room from it
        const id = socket.handshake?.query.userID
        socket.join(id);

        //recieve message from client
        socket.on('send-message', ({message, sender, receiver, members}) => {
            console.log("members :", members)
            msg={}
            msg.message=message;
            msg.sender=sender;
            msg.receiver=receiver;
            console.log("send to client :::", msg);
            socket.to(receiver).emit('get-message',msg);
        })
        
    })
}
