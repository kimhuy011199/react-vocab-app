import React from "react";
import { useHistory } from "react-router-dom";

import Modal from "../UI/Modal/Modal";
import ExaminationResultItem from "./ExaminationResultItem";

import classes from "./ExaminationResult.module.css";

const ExaminationResult = (props) => {
  const history = useHistory();

  const exitHandler = () => {
    history.push("/");
  };

  return (
    <Modal onClose={exitHandler}>
      <div className={classes.container}>
        <h3>
          Chúc mừng! <br /> Bạn đã hoàn thành bài kiểm tra
        </h3>
        <div className={classes.answer}>
          <div>
            <h5 className={classes.title}>Các từ đã thuộc:</h5>
            <ul>
              {props.correct.map((item) => (
                <ExaminationResultItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
          <div>
            <h5 className={classes.title}>Các từ chưa thuộc:</h5>
            <ul>
              {props.incorrect.map((item) => (
                <ExaminationResultItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
        <h5>
          Số câu trả lời đúng: {props.correct.length} / {props.length}
        </h5>
      </div>
    </Modal>
  );
};

export default ExaminationResult;
