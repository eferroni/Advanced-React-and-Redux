const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Create local strategy
const localOptions = { usernameField: "email" };

const localLogin = new LocalStrategy(localOptions, function (
  email,
  password,
  done
) {
  // Verify email and password
  User.findOne({ email: email }, function (err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);

    // compare passwords
    user.comparePassword(password, function (err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
  secretOrKey: config.secret,
};

// Create JWT startegy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if user id in payload exists in mongo
  User.findById(payload.sub, function (err, user) {
    if (err) return done(err, false);

    if (user) {
      // yes, call done
      done(null, user);
    } else {
      // no,
      done(null, false);
    }
  });
});

// use strategy
passport.use(jwtLogin);
passport.use(localLogin);
