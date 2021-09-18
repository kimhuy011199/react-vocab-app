import React from "react";

import classes from "./ExaminationSlide.module.css";

const ExaminationSlide = (props) => {
  return (
    <div className={classes.card} style={props.translateXStyle}>
      <div className={classes.content}>
        <p>Gõ từ đúng với định nghĩa sau:</p>
        <p className={classes.definition}>{props.item.definition}</p>
        <p className={classes.form}>{props.item.form}</p>
      </div>
    </div>
  );
};

export default ExaminationSlide;
