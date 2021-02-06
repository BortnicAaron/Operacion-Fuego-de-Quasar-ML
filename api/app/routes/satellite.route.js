module.exports = (app) => {
  const satellite = require("../controllers/satellite.controller.js");

  var router = require("express").Router();
  router.call;
  // Create Satellite
  router.post("/create", (req, res) => {
    const { name, x, y } = req.body;
    satellite
      .create(name, x, y)
      .then((resJson) => {
        res.send(resJson);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error",
        });
      });
  });

  // Create List Satellite
  router.post("/createlist", (req, res) => {
    const { satellites } = req.body;
    satellite
      .createList(satellites)
      .then((resJson) => {
        res.send(resJson);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error",
        });
      });
  });

  router.get("/list", (req, res) => {
    satellite
      .findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  });

  router.put("/one", (req, res) => {
    const { name } = req.name;
    satellite
      .findOne(name)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  });

  app.use("/satellite", router);
};
