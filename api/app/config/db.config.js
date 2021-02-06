module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "rebel_alliance",
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
