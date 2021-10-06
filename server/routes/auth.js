const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/UserModel');

// with response, sends users a cookie containing their user id
passport.serializeUser((user, done) => {
  try {
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
            username,
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

// passport.use(
//   'local',
//   new LocalStrategy(
//   (username, password, done) => {
//     let user = User.findOne({ username: profile.displayName }, (err, user) => {
     
//       if (!user) {
//       const {
//         id: googleId,
//         displayName: username,
//         name: { familyName: lastName, givenName: firstName },
//         _json: { email },
//       } = profile;
  
//       user = await User.create({
//         googleId,
//         username,
//         email,
//         firstName,
//         lastName,
//       });
//     }

//       // if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//       if (err) { return done(err); }
//     });
//   }
// ));

// router.get(
//   '/login',
//   passport.authenticate('local')
//   )



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
