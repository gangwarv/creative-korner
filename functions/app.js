const express = require("express");
const SSREngine = require("./view-engine");

var path = require("path");
var fs = require("fs");
const app = express();
const port = 3000;

SSREngine(app);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public", "index.html"))
);
// app.get("/blog/*", (req, res) =>
//   res.render("index")
// );

app.get("/blog/*", function (req, res, next) {
  if (req.path.includes(".")) return res.sendStatus(404);
  console.log("/*", req.path);
    // fs.readFile(__dirname + "/public/index.html", function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     console.log(data)
    //     res.write(data.replace('{}','[]'));
    //     return res.end();
    //   });
    var file = fs.readFileSync(__dirname + "/public/index.html")
    res.send(file.toString().replace('<!--SSR-->','<!--NO ENGINE-->'))
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
