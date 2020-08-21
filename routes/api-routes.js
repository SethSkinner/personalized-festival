// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Router } = require("express");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email id and name
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        name: req.user.name
      });
    }
  });


//Router.get("/", (req, res) => {
//  res.send("index.js");
//});

  // app.post("/api/attendees", (req, res) => {
  //   db.Attendee.create({
  //     name: req.body.name
  //   }).then(dbAttendee => {
  //     res.json(dbAttendee);
  //   });
  // });

  // app.get("/api/attendees:id", (req, res) => {
  //   db.Attendee.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(dbAttendee => {
  //     res.json(dbAttendee);
  //   });
  // });

  // app.delete("/api/attendees:id", (req, res) => {
  //   db.Attendee.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(dbAttendee => {
  //     res.json(dbAttendee);
  //   });
  // });

  app.post("/api/songs", isAuthenticated, (req, res) => {
    db.Song.create({
      name: req.body.name,
      userId: req.user.id,
      videoId: req.body.videoId
    }).then(dbSong => {
      res.json(dbSong);
    });
  });

  app.get("/api/songs/:id", (req, res) => {
    db.Song.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbSong => {
      res.json(dbSong);
    });
  });

  app.delete("/api/songs/:id", isAuthenticated, (req, res) => {
    db.Song.destroy({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    }).then(dbSong => {
      res.json(dbSong);
    });
  });

  // GET route for getting all of the posts
  app.get("/api/posts", (req, res) => {
    const query = {};
    if (req.query.userId) {
      query.userId = req.query.userId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then((dbPost) => {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", (req, res) => {
    db.Post.create(req.body).then((dbPost) => {
      res.json(dbPost);
    });
  });
};
