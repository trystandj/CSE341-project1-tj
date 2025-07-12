/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const mongodb = require("./data/database");
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With, Content-Type, Accept, Z-key",
  );
  next();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port, () => {
      console.log(`Server and Database are running on port ${port}`);
    });
  }
});
