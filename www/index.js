const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const massive = require('massive');
const moment = require('moment');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config.js');

const app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'make up your own session secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));
app.use('/ocr', express.static(__dirname + '/ocrWork/www'));
//database
const massiveInstance = massive.connectSync({connectionString : config.db});
app.set('db', massiveInstance);
const db = app.get('db');
const serverController = require('./serverController.js');

//Facebook Authorization
passport.use(new FacebookStrategy({
    clientID: config.facebookID,
    clientSecret: config.facebookSecret,
    callbackURL: "/auth/facebook/callback"
  }, (accessToken, refreshToken, profile, next) => {
   console.log('FB Profile: ', profile);
    //db. query to check if user exists in database
    db.users.findOne({fb_id: profile.id}, (err, dbRes) => {
      if (!dbRes) {
        console.log("User not found. Creating...");
        db.users.insert({fb_id: profile.id, name: profile.displayName, pic: profile.picture} , (err, dbRes) => {
          return next(null, dbRes);
        });
      } else {
        return next(null, dbRes);
      }
    });
  }
));

passport.serializeUser((profile, done) => {
  // console.log('ser');
  done(null, profile);
});

passport.deserializeUser((deserializedUser, done) => {
  // console.log('des');
  done(null, deserializedUser);
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/#/welcome',
  failureRedirect: '/#/'
}));

const checkAuth = (req, res, next) => {
  // console.log("checkAuth");
  if (req.isAuthenticated()) {
    next();
  }
  else {
    res.json({err: 403});
  }
};

app.get('/me', checkAuth, (req, res, next) => {
  console.log("req.user in server /me", req.user);
   res.json(req.user);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

//Other

app.get('/getExpenditures', serverController.getExpenditures);
app.get('/getBudgets', serverController.getBudgets);
app.get('/getUsers', serverController.getUsers);
app.get('/getMoneyTotal', serverController.getMoneyTotal);
app.get('/getBudgetExpenditures', serverController.getBudgetExpenditures);
app.post('/addExpenditure', serverController.addExpenditure)








app.listen(8080, () => {
  console.log('listening on port 8080');
});
