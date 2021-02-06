const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Transmitter = sequelize.define("transmitter", {
    finalMessage: {
      type: DataTypes.STRING
    },
  }, {
    // Other model options go here
  });
  
  return Transmitter;
};