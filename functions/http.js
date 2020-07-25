const fs = require("fs");
const http = require("http");
let time = new Date(2000, 1, 1);
function getHeaders(url) {
  const headers = { "Content-Type": "text/html" };
  const mimeTypes = {
    ".txt": "text/plain",
    ".html": "text/html",
    ".jpg": "image/jpeg",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".ico": "image/x-icon",
    ".json": "application/json",
    ".xml": "application/xml",
  };
  const i = url.lastIndexOf(".");
  const ext = url.substr(i).toLowerCase();
  for (let key in mimeTypes) {
    if (ext == key) headers["Content-Type"] = mimeTypes[key];
  }
  return headers;
}
const cachedPages = {};
function loadFile(url) {
  const isHtml = url.endsWith(".html");
  return new Promise((resolve, reject) => {
    // return if result in cache
    console.log(cachedPages)
    if (cachedPages.hasOwnProperty(url)) {
    //   resolve(cachedPages[url]);
    console.log('cached..')
    }
    // else read file
    // console.log("loading file");
    time = new Date();
    fs.readFile(url, function (err, data) {
      if (err) reject(err);
      else {
        if (isHtml) cachedPages[url] = data;
        resolve(data);
      }
    });
  });
}
http
  .createServer(function (req, res) {
    let url = `${__dirname}/public${req.url}`;
    let isDynamic = false;

    if (!req.url.includes(".")) {
        // console.log(cachedPages)
      isDynamic = true;
      url = `${__dirname}/public/index.html`;
    }

    loadFile(url).then((data) => {
      res.writeHead(200, getHeaders(url));
      res.end(data);
    });

    fs.readFile(url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end("404 - FILE NOT FOUND");
        return;
      }
      if (isDynamic) {
        data = data
          .toString()
          .replace(
            "<!--SSR-->",
            `<!--META TAGS USING HTTPSERVER ${time.toString()}-->`
          );
      }
      res.end(data);
      console.log('END @',new Date())
    });
    // dynamic routes
    fs.read;
  })
  .listen(8080);
