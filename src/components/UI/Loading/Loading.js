import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loading;
