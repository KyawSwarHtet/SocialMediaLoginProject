import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logoutFun = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Social App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avator" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logoutFun}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
