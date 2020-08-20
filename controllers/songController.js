const express = require("express");
const router = express.Router();
// const song = require("../models/song.js");
const db = require("../models");

// router.post("/api/songs", (req, res) => {
//   song.insertOne(
//     ["name", "userId", "videoId"], 
//     [req.body.name, req.body.userId, req.body.videoId],
//     result => {
//       res.json({ id: result.insertId });
//     }
//   );
// });

// module.exports = router;


module.exports = function(app) {
  app.get("/api/songs", (req, res) => {
    db.Song.findAll({
      include: [db.Post]
    }).then((dbSong) => {
      res.json(dbSong);
    });
  });

  app.get("/api/songs/:id", (req, res) => {
    db.Song.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then((dbSong) => {
      res.json(dbSong);
    });
  });

  app.post("/api/songs", (req, res) => {
    db.Song.create(req.body).then((dbSong) => {
      res.json(dbSong);
    });
  });

  app.delete("/api/songs/:id", (req, res) => {
    db.Song.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbSong) => {
      res.json(dbSong);
    });
  });
};
