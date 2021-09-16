import React from "react";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import classes from "./CategoryModal.module.css";

const CategoryModal = (props) => {
  const learningUrl = `/learning/${props.slug}`;
  const examinationUrl = `/examination/${props.slug}`;

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.container}>
        <h5>Bạn đã chọn chủ đề: {props.name}</h5>
        <p>Bạn có thể học từ vựng hoặc kiểm tra lại từ vựng nếu muốn</p>
        <div className={classes.actions}>
          <Link to={learningUrl}>HỌC</Link>
          <Link to={examinationUrl}>KIỂM TRA</Link>
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;
