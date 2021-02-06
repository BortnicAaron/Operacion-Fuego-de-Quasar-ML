const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const http = require("http");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

const asd = http.createServer(app);
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Operación Fuego de Quasar" });
});

const PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: true }).then(() => {
  rutesAll();
  asd.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

function rutesAll() {
  require("./app/routes/satellite.route")(app);
  require("./app/routes/topsecret.route")(app);
}
