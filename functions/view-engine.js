var fs = require("fs");
module.exports = function (app) {
  app.engine("ssr", function (filePath, options, callback) {
    // define the template engine
    fs.readFile(filePath, function (err, content) {
      if (err) return callback(err);
      // this is an extremely simple template engine
      var rendered = content
        .toString()
        .replace("<!--SSR-->", "<!--META TAG-->");
      return callback(null, rendered);
    });
  });
  app.set("views", "./views"); // specify the views directory
  app.set("view engine", "ssr");
};
