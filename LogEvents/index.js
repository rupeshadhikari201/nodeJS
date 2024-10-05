const logEvent = require('./logevent')
const eventEmitter = require('events')

// create a class
class MyEmitter extends eventEmitter { }
// create an object (initialize)
const myEmitter = new MyEmitter()
// add a listener on logevent
myEmitter.on('log', (msg) => logEvent(msg))
// add an emitter 
myEmitter.emit('log', 'Hello World!') // this will trigger the logEvent function with "Hello World!" as parameter