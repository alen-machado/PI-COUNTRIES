const { Activity, Country } = require('../../db')

const deleteCount = async (req, res, next) => {  //no se si anda

    const { id } = req.params;

    try {

        const country = await Country.destroy({ where: { id },
        include: Activity });
        
        if (country > 0) return res.send({ msg: "Country deleted correctly." });
        res.send({ msg: "Country doesn't exists" });

    } catch (error) {
        next(error);
    } 
    
}
module.exports = {deleteCount}