import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import AuthContext from "../../store/authContext";
import Profile from "./Profile";

const Header = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

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
          {authContext.isLoggedIn && <Profile email={authContext.email} />}
        </nav>
      </div>
    </div>
  );
};

export default Header;
