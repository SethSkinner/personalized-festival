const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = function(app) {
  // app.get("/api/attendees", (req, res) => {
  //   db.Attendee.findAll({
  //     include: [db.Post]
  //   }).then((dbAttendee) => {
  //     res.json(dbAttendee);
  //   });
  // });

  // app.get("/api/attendees/:id", (req, res) => {
  //   db.Attendee.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then((dbAttendee) => {
  //     res.json(dbAttendee);
  //   });
  // });

  // app.post("/api/attendees", (req, res) => {
  //   db.Attendee.create(req.body).then((dbAttendee) => {
  //     res.json(dbAttendee);
  //   });
  // });

  // app.delete("/api/attendees/:id", (req, res) => {
  //   db.Attendee.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then((dbAttendee) => {
  //     res.json(dbAttendee);
  //   });
  // });
  app.get("/api/posts", (req, res) => {
    db.Post.findAll({
      include: [db.Post]
    }).then((dbPost) => {
      res.json(dbPost);
    });
  });

  // app.get("/api/posts/:id", (req, res) => {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then((dbPost) => {
  //     res.json(dbPost);
  //   });
  // });

  app.post("/api/posts", (req, res) => {
    db.Post.create(req.body).then((dbSPost) => {
      res.json(dbPost);
    });
  });
};
