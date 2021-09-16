import React from "react";
import classes from "./Heading.module.css";

const Heading = (props) => {
  return <h2 className={classes.heading}>{props.heading}</h2>;
};

export default Heading;
