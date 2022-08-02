const { Country } = require('../../db')

const getContinents = async (req, res, next) => {

    const search = await Country.findAll({
        attributes: ['continents']
    })

    try {
        
         let object = {};
         const continents = await search.filter((e) => object[e.continents] ? false : object[e.continents] = true);

        return res.status(202).json(continents);
    } catch (error) {
        next(error)
    }
}
module.exports = {getContinents}