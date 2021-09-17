import React from "react";
import classes from "./VocabItem.module.css";
import getStrapiMedia from "../../api/media";
import CloseIcon from "../Icons/CloseIcon";

const VocabItem = (props) => {
  const audio = new Audio(getStrapiMedia(props.item.audio.url));

  const playAudioHandler = () => {
    audio.play();
  };

  const removeItemHandler = () => {
    console.log(props.item.id);
  };

  return (
    <li className={classes.item}>
      <p>{props.item.word}</p>
      <p className={classes.audio} onClick={playAudioHandler}>
        {props.item.phonetic}
      </p>
      <p>{props.item.mean}</p>
      <p>{props.item.sentence}</p>
      <button className={classes.action} onClick={removeItemHandler}>
        <CloseIcon />
      </button>
    </li>
  );
};

export default VocabItem;
