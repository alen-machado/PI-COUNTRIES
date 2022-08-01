const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
      
    //   },

    id : {
      type: DataTypes.STRING(3),
      primaryKey:true
      
    },
      
    name: { //listo
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {//flasgs
      type: DataTypes.STRING,
      allowNull: false
    },

    continents: { //region
      type: DataTypes.STRING,
      allowNull: false
    },

    capital: { //listo
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: { //listo
      type: DataTypes.STRING,
      allowNull: true
    },

    area: { //listo
      type: DataTypes.INTEGER,
      allowNull: true
    },

    population: { //listo
      type: DataTypes.INTEGER,
      allowNull: true
    },

  },{
    timestamps:false,
    createdAt: false,
    updateAt:false
  });
};
