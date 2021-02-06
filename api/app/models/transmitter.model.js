const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Transmitter = sequelize.define("transmitter", {
    finalMessage: {
      type: DataTypes.STRING
    },
  }, {

  });
  
  return Transmitter;
};