// import dgram from 'dgram'
const dgram = require('dgram')
const PORT = '8090'

const client = dgram.createSocket('udp4')

client.on('message', (data, remoteInfo) => {
    console.log(`the port is: ${remoteInfo.port} \n the address is: ${remoteInfo.address} \n  the data is: ${data.toString('utf-8')}
        }`)
})
// client.on('message', (data, remoteInfo) => {
//     console.log(`Received message from ${ remoteInfo.address }: ${ remoteInfo.port }: ${ data.toString('utf-8') }`);
// });

client.bind(PORT)