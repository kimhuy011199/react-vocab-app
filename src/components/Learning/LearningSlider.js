import React, { useState } from "react";

import LearningResult from "./LearningResult";
import LearningSlide from "./LearningSlide";

import classes from "./LearningSlider.module.css";

const LearningSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateXStyle, setTranslateXStyle] = useState({});
  const [flipStyle, setFlipStyle] = useState(null);
  const [inputStyle, setInputStyle] = useState(null);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const resetStyle = () => {
    setInput("");
    setFlipStyle(null);
    setInputStyle({});
  };

  // Go to next slide
  const nextSlideHandler = () => {
    if (currentSlide === props.data.length - 1) {
      toggleModal();
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide + 1);
    setTranslateXStyle({
      transform: `translateX(${(currentSlide + 1) * -100}%)`,
    });
    resetStyle();
  };

  // Go to previous slide
  const prevSlideHandler = () => {
    if (currentSlide === 0) {
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide - 1);
    setTranslateXStyle({
      transform: `translateX(${(currentSlide - 1) * -100}%)`,
    });
    resetStyle();
  };

  // Flip flashcard
  const flashcardChangeHandler = () => {
    if (flipStyle) {
      setFlipStyle(null);
      return;
    }
    setFlipStyle({ transform: `rotateX(180deg)` });
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  // Handle user input:
  // True -> Flip flashcard
  // False -> Make border input red
  const submitHandler = (event) => {
    event.preventDefault();
    if (props.data[currentSlide].word === input) {
      setInputStyle({});
      if (!flipStyle) {
        setFlipStyle({ transform: `rotateX(180deg)` });
      }
    } else {
      setInputStyle({ border: `1px solid red` });
    }
  };

  return (
    <section className={classes.slider}>
      <div className={classes.progress}>
        {currentSlide + 1} / {props.data.length}
      </div>
      <div className={classes.slide}>
        {props.data.map((item) => (
          <LearningSlide
            key={item.id}
            onFlashcardChange={flashcardChangeHandler}
            translateXStyle={translateXStyle}
            flipStyle={flipStyle}
            item={item}
          />
        ))}
      </div>
      <div className={classes.actions}>
        <button className={classes.prev} onClick={prevSlideHandler}>
          QUAY LẠI
        </button>
        <form className={classes.form} onSubmit={submitHandler}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Gõ từ vựng đoán được vào đây và nhấn Enter"
            onChange={inputChangeHandler}
            value={input}
          />
        </form>
        <button className={classes.next} onClick={nextSlideHandler}>
          TIẾP THEO
        </button>
      </div>
      {isModalOpen && (
        <LearningResult
          name={props.name}
          slug={props.slug}
          onClose={toggleModal}
        />
      )}
    </section>
  );
};

export default LearningSlider;
