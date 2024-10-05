const net = require('net')

HOST = 'localhost'
PORT = 8081

const client = net.createConnection({ port: PORT, host: HOST })

client.on('connect', () => {
    console.log("Client Connected to server. ")

    client.write("Hello From Client, One")
})

client.on('data', (data) => {
    console.log(`Data Received from the server is : ${data}`)
})

client.on('end', () => {
    console.log("Disconnected from the server. ")
})