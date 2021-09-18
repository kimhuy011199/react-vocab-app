import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeartIcon from "../Icons/HeartIcon";
import HeartIconSolid from "../Icons/HeartIconSolid";

import { vocabsActions } from "../../store/vocabs-slice";

import classes from "./ExaminationResultItem.module.css";

const ExaminationResultItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const vocabularies = useSelector((state) => state.vocabs.vocabularies);

  // Style heart icon
  useEffect(() => {
    if (vocabularies.some((item) => item.id === props.item.id)) {
      setIsActive(true);
    }
  }, [vocabularies, props.item.id]);

  const toggleVocab = () => {
    if (isActive) {
      dispatch(vocabsActions.removeItem(props.item.id));
    } else {
      dispatch(vocabsActions.addItem(props.item));
    }
    setIsActive((prevState) => !prevState);
  };

  return (
    <li className={classes.item}>
      {!props.isMyVocabs && (
        <button onClick={toggleVocab} className={classes["heart-button"]}>
          {isActive && <HeartIconSolid />}
          {!isActive && <HeartIcon />}
        </button>
      )}
      <p>{props.item.word}</p>
    </li>
  );
};

export default ExaminationResultItem;
