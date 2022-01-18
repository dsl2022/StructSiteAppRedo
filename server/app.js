const express = require("express");
const app = express();
const Utils = require("./utils");
const path = require("path");

var cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/ping", (req, res) => {
  res.send("healthy");
});

module.exports = app;
