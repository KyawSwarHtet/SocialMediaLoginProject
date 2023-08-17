const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
require("./passport");
const cors = require("cors");
const authRouter = require("./routes/auth");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use("/auth", authRouter);

app.listen("5000", () => {
  console.log("server is running!");
});
