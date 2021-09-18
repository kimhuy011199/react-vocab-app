import React from "react";
import { Link } from "react-router-dom";

import classes from "./LearningError.module.css";

const LearningError = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <h4>{props.content.message}</h4>
        <Link to={props.content.url}>{props.content.link}</Link>
      </div>
    </section>
  );
};

export default LearningError;
