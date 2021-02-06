const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const SatelliteInf = sequelize.define("satelliteinf", {
    distance: {
      type: DataTypes.DOUBLE
    },
    message: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    status: {
      type: DataTypes.ENUM,
      values: [ "COMPLETE", "INCOMPLETE"],
    }
  });

  return SatelliteInf;
};