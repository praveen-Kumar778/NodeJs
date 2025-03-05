const EventEmitter = require('events');

const myFirstEventEmitter = new EventEmitter();

// register a listener

myFirstEventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);
})

myFirstEventEmitter.emit('greet', "Karan");
