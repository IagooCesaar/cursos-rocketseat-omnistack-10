const axios      = require('axios')
const Dev        = require('../models/Dev')

const parseStringAsArray = require('../utils/ParseStringAsArray')
const {findConnections, sendMessage} = require('../websocket')

module.exports = {
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev =  await Dev.findOne({
            github_username
        });
        if (dev) return res.json(dev)
        console.log('Cadastrando novo dev: '+github_username)
    
        const response = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const { name=login, avatar_url, bio } = response.data;
    
        const techsArray = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        dev = await Dev.create({
            github_username, 
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })

        // Filtrar conexões que estão há no max 10kms de distância
        // e que o novo dev tenha ao menos uma das tecnologias filtradas
        const sendSocketMessageTo = findConnections(
            {latitude, longitude},
            techsArray
        )
        console.log('Conexões próximas: ',sendSocketMessageTo)   
        sendMessage(sendSocketMessageTo, 'new-dev', dev)     
        return res.json(dev)
    },

    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs)
    },
}