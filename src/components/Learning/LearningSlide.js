import React from "react";
import getStrapiMedia from "../../api/media";
import classes from "./LearningSlide.module.css";
import SliderIcon from "../Icons/SliderIcon";
import HeartIcon from "../Icons/HeartIcon";
import AudioIcon from "../Icons/AudioIcon";

const LearningSlide = (props) => {
  const imgUrl = getStrapiMedia(props.item.image.url);
  const audio = new Audio(getStrapiMedia(props.item.audio.url));

  const playAudioHandler = () => {
    audio.play();
  };

  return (
    <div className={classes.card} style={props.translateXStyle}>
      <button
        className={classes["flip-button"]}
        onClick={props.onFlashcardChange}
      >
        <SliderIcon />
      </button>
      <button className={classes["heart-button"]}>
        <HeartIcon />
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
        </div>
      </div>
    </div>
  );
};

export default LearningSlide;
