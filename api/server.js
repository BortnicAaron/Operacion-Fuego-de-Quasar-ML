const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const http = require('http');


const app = express();

/*var corsOptions = {
  origin: "http://localhost:8081"
};*/
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

const asd= http.createServer(app);
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//db.sequelize.sync({ force: true })

/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;


db.sequelize.sync({ force: true }).then(() => {
  rutesAll()
  asd.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
});


function rutesAll(){
  require("./app/routes/satellite.route")(app);
  require("./app/routes/topsecret.route")(app);
}