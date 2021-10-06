const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/UserModel');
const authController = require('../controllers/authController')

// with response, sends users a cookie containing their user id
passport.serializeUser((user, done) => {
  try {
    console.log(user)
    done(null, user.id);
  } catch (err) {
    console.log(err);
  }
});

// accepts user id cookie and attaches user object to req
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          // destruct google profile
          const {
            id: googleId,
            displayName: username,
            name: { familyName: lastName, givenName: firstName },
            _json: { email },
          } = profile;
          //use google profile info to create new user in db
          user = await User.create({
            googleId,
            email,
            firstName,
            lastName,
          });
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);

passport.use(
  'local', 
  new LocalStrategy(
    // {usernameField: 'email'}
  (email, password, done) => {
     User.findOne({ email }, 
      function (err, user) {
      if (err) { return done(err); }
      if (!user) {return done(null, false);}
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done (null, user);
    });
  }
));

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/test');
  });

// res.locals.user

router.post('/signup', 
console.log('hit server', req.body),
authController.createUser,
(req, res) => {
res.status(200).json({})
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/test', (req, res) => {
  res.json(req.user);
});

module.exports = router;
