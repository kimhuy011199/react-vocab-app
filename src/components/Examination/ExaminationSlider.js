import React, { useEffect, useState } from "react";

import ExamSlide from "./ExaminationSlide";
import ExamResult from "./ExaminationResult";

import classes from "./ExaminationSlider.module.css";

const shuffle = (data) => {
  return [...data].sort(() => Math.random() - 0.5);
};

const ExaminationSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateXStyle, setTranslateXStyle] = useState({});
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [questions, setQuestions] = useState([]);

  // Random questions order
  useEffect(() => {
    setQuestions(shuffle(props.data));
  }, [props.data]);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setInput("");

    // Handle correct and incorrect answer
    if (questions[currentSlide].word === input) {
      setCorrect((prev) => [...prev, questions[currentSlide]]);
    } else {
      setIncorrect((prev) => [...prev, questions[currentSlide]]);
    }

    if (currentSlide === questions.length - 1) {
      return;
    }

    // Go to next question
    setCurrentSlide((prevSlide) => prevSlide + 1);
    setTranslateXStyle({
      transform: `translateX(${(currentSlide + 1) * -100}%)`,
    });
  };

  // Show result when finish examination
  if (correct.length + incorrect.length === questions.length) {
    return (
      <ExamResult
        incorrect={incorrect}
        correct={correct}
        length={questions.length}
      />
    );
  }

  return (
    <section className={classes.slider}>
      <div className={classes.progress}>
        {currentSlide + 1} / {questions.length}
      </div>
      <div className={classes.slide}>
        {questions.map((item) => (
          <ExamSlide
            key={item.word}
            item={item}
            translateXStyle={translateXStyle}
          />
        ))}
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Điền đáp án của bạn vào đây"
          onChange={inputChangeHandler}
          value={input}
        />
        <button>TIẾP THEO</button>
      </form>
    </section>
  );
};

export default ExaminationSlider;
