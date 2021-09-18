import React from "react";
import { Link } from "react-router-dom";

import classes from "./MyVocabsNavigation.module.css";

const MyVocabsNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link className={classes.full} to="/myvocabs/learning">
            HỌC NGAY
          </Link>
        </li>
        <li>
          <Link className={classes.cyan} to="/myvocabs/examination">
            KIỂM TRA
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MyVocabsNavigation;
