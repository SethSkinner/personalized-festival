// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const handlebars = require('express-handlebars');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
//uncomment later
//const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

var exphbs = require("express-handlebars");

app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts` 
}));
app.set("view engine", "handlebars");
app.use(express.static('views'));

app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts` 
}));

app.get('/', (req, res) => {
res.render('main', {layout: 'index'});
});



var routes = require("./controllers/festivalController.js");
// Syncing our database and logging a message to the user upon success
//uncomment db.sequelize later
//db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
//});
