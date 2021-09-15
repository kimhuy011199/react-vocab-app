import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} alt="VOCAB Logo" />
        </div>
        <nav className={classes.nav}>
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
        </nav>
      </div>
    </div>
  );
};

export default Header;
