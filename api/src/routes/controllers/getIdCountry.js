const { getApiInfo } = require('./getApiInfo')


const getIdCountry = async (req, res, next) => {
    try {
        const {id} = req.params
 //  const country = await Country.findOne({
    //      where: {code: id}, 
    //      include: Activity
    //  })
    const country = await getApiInfo()

    const countryId = country.filter(e => e.id == id)

     if(countryId){
         res.json(countryId)
     } else {
         res.json('id invalido')
     }
       
    
    } catch (error) {
        next(error)
    }
}

module.exports = {getIdCountry}