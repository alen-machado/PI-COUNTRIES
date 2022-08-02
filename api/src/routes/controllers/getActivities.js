const { Activity } = require('../../db')

const getActivities = async (req, res, next) => {

    const search = await  Activity.findAll({
        
     })

    try {
        let asd = search.map(e => e.name)
        asd =[...new Set(asd)].sort()
        //   let object = {};
        //   const activities = await search.filter((e) => object[e.activity] ? false : object[e.activity] = true);
        //   console.log(activities)
        return res.status(202).json(asd);
       
    } catch (error) {
        next(error)
    }
}
module.exports = {getActivities}