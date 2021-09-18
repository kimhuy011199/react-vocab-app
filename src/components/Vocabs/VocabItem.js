import React from "react";
import classes from "./VocabItem.module.css";
import getStrapiMedia from "../../api/media";
import CloseIcon from "../Icons/CloseIcon";
import { useDispatch } from "react-redux";
import { vocabsActions } from "../../store/vocabs-slice";

const VocabItem = (props) => {
  const audio = new Audio(getStrapiMedia(props.item.audio.url));
  const dispatch = useDispatch();

  const playAudioHandler = () => {
    audio.play();
  };

  const removeItemHandler = () => {
    dispatch(vocabsActions.removeItem(props.item.id));
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
