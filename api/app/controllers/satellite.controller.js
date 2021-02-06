const db = require("../models");
const { Satellite, Position, SatelliteInf } = db;


exports.create = (name, x, y) => {
  if (
    typeof name !== "string" ||
    typeof x !== "number" ||
    typeof y !== "number"
  ) {
    return Promise.reject(new Error("Faltan datos requeridos!"));
  }

  const positionPromise = Position.create({ x: x, y: y });
  const satellitePromise = Satellite.create({ name: name });

  const bodyRes = Promise.all([positionPromise, satellitePromise]).then(
    ([position, satellite]) => {
      satellite.setPosition(position.id);
      return { name: satellite.name, x: position.x, y: position.y };
    }
  );

  return bodyRes;
};


exports.createList = (satellites) => {
  if (!satellites || !Array.isArray(satellites)) {
    return Promise.reject(new Error("Error datos no validos"));
  }

  let satellitesVer = satellites.find((satellite) => {
    let { name, x, y } = satellite;
    if (
      typeof name !== "string" ||
      typeof x !== "number" ||
      typeof y !== "number"
    ) {
      return true;
    }
  });

  if (satellitesVer)
    return Promise.reject(new Error("Faltan datos requeridos!"));

  let satellitesRes = satellites.map((satellite) => {
    let { name, x, y } = satellite;
    return this.create(name, x, y);
  });

  return Promise.all(satellitesRes);
};

// Retrieve all Tutorials from the database.
exports.findAll = () => {
  return Satellite.findAll({
    attributes: ["id", "name"],
    include: [
      {
        model: Position,
        attributes: ["id", "x", "y"],
      },
      {
        model: SatelliteInf,
        attributes: ["id", "distance", "message", "status"],
      },
    ],
  });
};


exports.findOne = (name) => {
  if (typeof name !== "string"){
    return Promise.reject(new Error("Error name !== 'string'"));
  }
  return Satellite.findOne({ where: { name: name } });
};
