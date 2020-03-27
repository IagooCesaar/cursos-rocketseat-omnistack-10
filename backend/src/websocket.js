const socketio  = require('socket.io');

const parseStringAsArray = require ('./utils/ParseStringAsArray')
const calculateDistance = require ('./utils/calculateDistance')

const connections = [];
let   io;

exports.setupWebSocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        console.log('Nova conexão '+socket.id)
        console.log('Dados recebidos via socket',socket.handshake.query)
        const { latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: techs ? parseStringAsArray(techs) : []
        })
    })
}

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return ( calculateDistance(coordinates, connection.coordinates) < 10 ) 
            && ( connection.techs.some(item => techs.includes(item))         )
    })
}

exports.sendMessage = (to, message, data) =>{
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}