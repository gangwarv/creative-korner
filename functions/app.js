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
app.get('/sitemap', function(req, res){
  
  const xml = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>${req.protocol}://${req.hostname}/blog/</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  </urlset>`;
  res.header("content-type","application/xml");
  res.header("cache-control","max-age=1604800");
  res.send(xml);
})
app.use(express.static(path.join(__dirname, "public")));

app.get("/*", function (req, res, next) {
  if (req.path.includes(".")) return res.sendStatus(404);

  // console.log("/*", req.path);
  if (!indexPage) indexPage = fs.readFileSync(__dirname + "/public/index1.html");

  res.send(indexPage.toString().replace("<!--SSR-->", "<!--META--TAGS-->"));

});

module.exports = app;
