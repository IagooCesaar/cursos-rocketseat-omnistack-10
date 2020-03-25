const Dev = require('../models/Dev')

const parseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
    async index(req, res){
        //Buscar Devs num raio de 10km
        //Filtrar por technologias

        const { latitude, longitude, techs} = req.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
				},
				location: {
					$near: {
						$geometry: {
							type: 'Point',
							coordinates: [longitude, latitude]
						},
						$maxDistance: 10000
					},
				},
        })

        return res.json(devs)
    }
}