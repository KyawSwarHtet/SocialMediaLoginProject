const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "981861882506-hiim1lauioach9uoop30fj42g3tigiiv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "5327e1362c7aaacc50d3";
const GITHUB_CLIENT_SECRET = "029c939ca58b06abbb9f137672d1fb8b3b6b0b22";

const FACEBOOK_CLIENT_ID = "277941471626900";
const FACEBOOK_CLIENT_SECRET = "2bd741fb4b65b48a0de14ce8a55ac1a2";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
