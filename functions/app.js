const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

var indexPage = null;

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", function (req, res, next) {
  if (req.path.includes(".")) return res.sendStatus(404);

  console.log("/*", req.path);
  if (!indexPage) indexPage = fs.readFileSync(__dirname + "/public/index1.html");

  res.send(indexPage.toString().replace("<!--SSR-->", "<!--META--TAGS-->"));

});

module.exports = app;
