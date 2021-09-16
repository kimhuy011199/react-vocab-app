import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <h2>404</h2>
        <h4>Không tìm thấy trang!</h4>
        <Link to="/">Về trang chủ</Link>
      </div>
    </section>
  );
};

export default NotFound;
