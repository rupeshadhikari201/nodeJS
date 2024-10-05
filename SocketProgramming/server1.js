const net = require('net')

// define port and the host
PORT = 8081
HOST = 'localhost'

// create a tcp server using createServer() method of net module
const server = net.createServer((socket) => {
    console.log("TCP connection created with the clinet. ")

    // add a listener on the data event
    socket.on('data', (data) => {
        console.log("Data received from client: " + data)
        // send data back to client
        socket.write("Data was send to the client sucessfully. ")
    })

    // add another listner on end event
    socket.on('end', () => {
        console.log("Client Disconnected Sucessfully!")

    })

})

// add a listen method
server.listen(PORT, HOST, () => {
    console.log(`The server is listening at port no ${PORT} and the host name is : ${HOST}.`)
})