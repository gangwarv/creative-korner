const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

var indexPage = null;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, "public")));

app.use('/uploadFile', function(req,res){
  console.log('image:',req.file)
  res.send({success : 1,file:{url:'http://localhost/img/banner01.jpg'}})
});

app.get("/*", function (req, res, next) {
  if (req.path.includes(".")) return res.sendStatus(404);

  console.log("/*", req.path);
  if (!indexPage) indexPage = fs.readFileSync(__dirname + "/public/index1.html");

  res.send(indexPage.toString().replace("<!--SSR-->", "<!--META--TAGS-->"));

});

module.exports = app;
