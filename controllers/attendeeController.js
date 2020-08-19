const express = require("express");
const router = express.Router();
const db = require("../models");
// const attendee = require("../models/attendee.js");

// router.get("/", (req, res) => {
//   attendee.selectAll(data => {
//     const hbsObject = {
//       attendee: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/attendees", (req, res) => {
//   attendee.insertOne(["name"], [req.body.name], result => {
//     res.json({ id: result.insertId });
//   });
// });

// router.delete("api/attendees/:id", (req, res) => {
//   const condition = "id =" + req.params.id;

//   attendee.delete(condition, (result) => {
//     if (result.affectedRows === 0) {
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });

// module.exports = router;

module.exports = function(app) {
  app.get("/api/attendees", (req, res) => {
    db.Attendee.findAll({
      include: [db.Post]
    }).then((dbAttendee) => {
      res.json(dbAttendee);
    });
  });

  app.get("/api/attendees/:id", (req, res) => {
    db.Attendee.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then((dbAttendee) => {
      res.json(dbAttendee);
    });
  });

  app.post("/api/attendees", (req, res) => {
    db.Attendee.create(req.body).then((dbAttendee) => {
      res.json(dbAttendee);
    });
  });

  app.delete("/api/attendees/:id", (req, res) => {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbAuthor) => {
      res.json(dbAuthor);
    });
  });
};
