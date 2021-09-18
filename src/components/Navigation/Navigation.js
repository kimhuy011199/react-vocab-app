import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import Profile from "./Profile";

import AuthContext from "../../store/authContext";

import classes from "./Navigation.module.css";

const Header = () => {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="VOCAB Logo" />
          </Link>
        </div>
        <nav className={classes.nav}>
          {!authContext.isLoggedIn && (
            <ul>
              {location.pathname !== "/login" && (
                <li>
                  <Link className={classes.full} to="/login">
                    ĐĂNG NHẬP
                  </Link>
                </li>
              )}
              {location.pathname !== "/register" && (
                <li>
                  <Link className={classes.cyan} to="/register">
                    ĐĂNG KÝ
                  </Link>
                </li>
              )}
            </ul>
          )}
          {authContext.isLoggedIn && <Profile />}
        </nav>
      </div>
    </div>
  );
};

export default Header;
