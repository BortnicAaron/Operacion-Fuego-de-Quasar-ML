module.exports = app => {
  const topsecret = require("../controllers/topsecret.controller.js");

  var router = require("express").Router();

  // Nivel 2
  router.post("/topsecret", (req, res)=>{
    const { satellites } = req.body;
    topsecret.topsecret(satellites)
    .then((resJson) => {
      res.status(200).send(resJson);
    })
    .catch((err) => {
      res.status(404).send({
        error: err.message || "Error"
      });
    });
  });

  // Nivel 3
  router.post("/topsecret_split/:satellite_name", (req, res)=>{
    const  {distance,message}  = req.body;
    const {satellite_name} = req.params
    topsecret.topsecretSplit(satellite_name,distance,message)
    .then((resJson) => {
      res.status(200).send(resJson);
    })
    .catch((err) => {
      res.status(404).send({
        error: err.message || "Error"
      });
    });

  });

  router.get("/topsecret_split/:satellite_name", (req, res)=>{
    const {satellite_name} = req.params
    topsecret.topsecretSplitGet(satellite_name)
    .then((resJson) => {
      res.status(200).send(resJson);
    })
    .catch((err) => {
      res.status(404).send({
        error: err.message || "Error"
      });
    });

  });
  app.use('/', router);
};