const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
  app
    .route("/api/notes")
    .get((req, res) => res.send(db))
    .post(function (req, res) {
      var newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
      };
      db.push(newNote);
      res.send(newNote);
    });

  app.delete("/api/notes/:id", function (req, res) {
    var reqNoteID = req.params.id;
    db.forEach((note) => {
      if (reqNoteID === note.id) {
        var noteIndex = db.indexOf(note);
        db.splice(noteIndex, 1);
      }
    });
    res.send(db);
  });
};
