const express = require("express");
const router = express.Router();
const artist = require("../models/artist.js");

router.post("/api/artists", (req, res) => {
  artist.insertOne(
    ["name", "song", "videoID"], 
    [req.body.name, req.body.song, req.body.videoID],
    result => {
      res.json({ id: result.insertId });
    }
  );
});

module.exports = router;
