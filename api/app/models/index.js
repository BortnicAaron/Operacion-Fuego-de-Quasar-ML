const dbConfig = require("../config/db.config.js");
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false, 
  native: false, 
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

["Satellite", "SatelliteInf", "Position", "Transmitter"].forEach((ele) => {
  db[ele] = require(`./${ele[0].toLowerCase() + ele.slice(1)}.model.js`)(
    sequelize,
    Sequelize
  );
});

const { satellite, position, transmitter, satelliteinf } = db.sequelize.models;

satellite.hasOne(position);

satellite.hasOne(satelliteinf);

transmitter.hasMany(satelliteinf);

transmitter.hasOne(position);

module.exports = db;
