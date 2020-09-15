var path = require("path");

//create path to and from index.html and notes.html, and export the module
module.exports = function (app) { 
    app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));
    app.get("*",  (req, res) =>res.sendFile(path.join(__dirname, "../public/index.html")));
}