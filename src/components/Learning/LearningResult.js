import React from "react";
import { Link } from "react-router-dom";

import Modal from "../UI/Modal/Modal";

import classes from "./LearningResult.module.css";

const LearningResult = (props) => {
  const examUrl = `/examination/${props.slug}`;

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.container}>
        <h5>Chúc mừng! Bạn đã hoàn thành chủ đề</h5>
        <h3>{props.name}</h3>
        <p>
          Bây giờ bạn có thể về trang chủ hoặc kiểm tra từ vựng của chủ đề này
        </p>
        <div className={classes.actions}>
          <Link to={examUrl}>KIỂM TRA</Link>
          <Link to="/">TRANG CHỦ</Link>
        </div>
      </div>
    </Modal>
  );
};

export default LearningResult;
