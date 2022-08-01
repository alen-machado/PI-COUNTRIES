const { Activity, Country } = require('../../db')

const postActivity = async (req, res, next) => {  //no se si anda
   
    try {

        const {
            name,
            difficulty,
            duration,
            season,
            country
            } = req.body

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season, 
            
        })
         
          country.map( async c => {
            let search = await Country.findAll(
                {where: {id : c}}
            )
            if (search) {
                newActivity.addCountry(search)
            }
          })
        //country1.addActivity(newActivity)

        res.send('actividad creada')

     } catch (error) { 
        next(error)
     }
}
module.exports = {postActivity}