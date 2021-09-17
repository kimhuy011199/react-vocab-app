import React from "react";
import VocabItem from "./VocabItem";
import classes from "./VocabsList.module.css";

const VocabsList = (props) => {
  return (
    <section className={classes.container}>
      <ul>
        <li className={classes.heading}>
          <p>Từ vựng</p>
          <p>Phiên âm</p>
          <p>Nghĩa</p>
          <p>Mẫu câu</p>
          <div></div>
        </li>
        {props.vocabsList.map((item) => (
          <VocabItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default VocabsList;
