const { Activity, Country } = require('../../db')

const deleteAct = async (req, res, next) => {  //no se si anda

    const { id } = req.params;

    try {

        const activity = await Activity.destroy({ where: { id } });
        
        if (activity > 0) return res.send({ msg: "Activity deleted correctly." });
        res.send({ msg: "Activity doesn't exists" });

    } catch (error) {
        next(error);
    } 
    
}
module.exports = {deleteAct}