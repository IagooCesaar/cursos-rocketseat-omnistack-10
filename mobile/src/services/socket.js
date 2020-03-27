import socketio from 'socket.io-client';

const socket = socketio('http://192.168.100.100:3333', {
    autoConnect: false,
})

function subscridbeToNewDevs(subscridbeFunction) {
    socket.on('new-dev', subscridbeFunction)
}

function connect(latitude, longitude, techs) {
    disconnect();
    socket.io.opts.query = {
        latitude, 
        longitude,
        techs
    }
    socket.connect();
    
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}
export {
    connect,
    disconnect,
    subscridbeToNewDevs,
}