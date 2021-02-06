const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define("position", {
    x: {
      type: DataTypes.DOUBLE
    },
    y: {
      type: DataTypes.DOUBLE
    }
  }, {

  });
  
  return Position;
};


