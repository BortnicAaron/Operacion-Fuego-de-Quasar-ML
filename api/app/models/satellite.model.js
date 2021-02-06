const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Satellite = sequelize.define("satellite", {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
  });

  return Satellite;
};