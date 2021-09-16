import React from "react";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.container}>
      <p>Something went wrong! Please try again.</p>
    </div>
  );
};

export default Error;
