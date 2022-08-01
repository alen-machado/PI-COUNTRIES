require("dotenv").config();
const axios = require ('axios')
const {Country} = require('../../db')
const {Activity} = require('../../db')

const GetApiInfo = async () => {
    try {
        const apiUrl = await axios.get('https://restcountries.com/v3/all')
        const apiInfo = apiUrl.data?.map(e => { 
            return {
              id: e.cca3,
              name: e.name.official,
              image: e.flags[1],
              continents: e.continents[0]? e.continents[0] :'El continente de este pais no esta disponible' ,
              capital: e.capital? e.capital[0] : 'La capital de este pais no esta disponible',
              subregion: e.subregion ? e.subregion : 'La subregion de este pais no esta disponible' ,
              area: e.area,
              population: e.population
            }
            
        })
        
        const infoBD = await Country.findAll({
          include: Activity
      })
        
        if(!infoBD.length) {
           
           await Country.bulkCreate(apiInfo)
           
           const dataDB = await Country.findAll({
           include: Activity
        })
           return dataDB
          
        } else {
          return infoBD
        }
    } catch (error) {
        console.log(error)
    }
} 

module.exports = {GetApiInfo}