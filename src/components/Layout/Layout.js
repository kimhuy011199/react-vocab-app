import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className={classes.layout}>{props.children}</main>
    </>
  );
};

export default Layout;
