import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SliderIcon from "../Icons/SliderIcon";
import HeartIcon from "../Icons/HeartIcon";
import HeartIconSolid from "../Icons/HeartIconSolid";
import AudioIcon from "../Icons/AudioIcon";

import { vocabsActions } from "../../store/vocabs-slice";
import getStrapiMedia from "../../api/media";

import classes from "./LearningSlide.module.css";

const LearningSlide = (props) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const vocabularies = useSelector((state) => state.vocabs.vocabularies);

  const audio = new Audio(getStrapiMedia(props.item.audio.url));
  const imgUrl = getStrapiMedia(props.item.image.url);

  const playAudioHandler = () => {
    audio.play();
  };

  const toggleItemHandler = () => {
    if (isActive) {
      dispatch(vocabsActions.removeItem(props.item.id));
    } else {
      dispatch(vocabsActions.addItem(props.item));
    }
    setIsActive((prevState) => !prevState);
  };

  // Style heart icon
  useEffect(() => {
    if (vocabularies.some((item) => item.id === props.item.id)) {
      setIsActive(true);
    }
  }, [vocabularies, props.item.id]);

  return (
    <div className={classes.card} style={props.translateXStyle}>
      <button
        className={classes["flip-button"]}
        onClick={props.onFlashcardChange}
      >
        <SliderIcon />
      </button>
      <div className={classes.inner} style={props.flipStyle}>
        <div className={classes.front}>
          <div className={classes.image}>
            <img src={imgUrl} alt={props.item.name} className={classes.img} />
          </div>
          <div className={classes.content}>
            <p>Definition:</p>
            <p className={classes.definition}>{props.item.definition}</p>
            <p className={classes.form}>{props.item.form}</p>
          </div>
        </div>
        <div className={classes.back}>
          <div className={classes.image}>
            <img src={imgUrl} alt={props.item.name} className={classes.img} />
          </div>
          <div className={classes.content}>
            <p className={classes.word}>{props.item.word}</p>
            <div className={classes.phonetic}>
              <p>{props.item.phonetic}</p>
              <button className={classes.audio} onClick={playAudioHandler}>
                <AudioIcon />
              </button>
            </div>
            <p className={classes.mean}>{props.item.mean}</p>
            <div className={classes.example}>
              <p>Example:</p>
              <p className={classes.sentence}>{props.item.sentence}</p>
            </div>
          </div>
          {props.isMyVocabs ? null : (
            <button
              className={classes["heart-button"]}
              onClick={toggleItemHandler}
            >
              {isActive && <HeartIconSolid />}
              {!isActive && <HeartIcon />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningSlide;
