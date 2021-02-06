module.exports = app => {
  const satellite = require("../controllers/satellite.controller.js");

  var router = require("express").Router();
  router.call
  // Create a new Tutorial
  router.post("/create", (req, res) => {
    const {name,x,y} = req.body;
    satellite.create(name,x,y)
    .then((resJson)=>{
      res.send(resJson);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
  });

  // Create a new Tutorial
  router.post("/createlist", (req, res) => {
    const {satellites} = req.body
    satellite.createList(satellites)
    .then((resJson)=>{
      res.send(resJson);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
  });

  // Retrieve all Tutorials
  router.get("/list",(req, res) => {
    satellite.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  });

  


  // Update a Tutorial with id
  router.put("/one", (req, res)=>{
    const {name} = req.name;
    satellite.findOne(name)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  });




  app.use('/satellite', router);
};