import React from "react";
import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const Login = () => {
  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const githubLogin = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebookLogin = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={googleLogin}>
            <img src={Google} alt="google" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebookLogin}>
            <img src={Facebook} alt="facebook" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={githubLogin}>
            <img src={Github} alt="github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
