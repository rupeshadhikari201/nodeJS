const dgarm = require('dgram')

const HOST = 'localhost'
const PORT = 8090

const server = dgarm.createSocket('udp4')

server.on('listening', () => {
    console.log(`Server is listening on port ${PORT}`)
})

server.send("Message from server", PORT, HOST, (err) => {
    if (err) {
        console.log(err)
        return;
    }

    console.log("Message send to the client. ")
})