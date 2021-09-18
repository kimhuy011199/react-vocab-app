import React from "react";

import FlashcardIcon from "../Icons/FlashcardIcon";
import ExaminationIcon from "../Icons/ExaminationIcon";
import LearningIcon from "../Icons/LearningIcon";

import classes from "./Features.module.css";

const features = [
  {
    key: 1,
    name: "Flashcard 2 mặt",
    description:
      "Bạn sẽ được học từ vựng với flashcard 2 mặt, gồm định nghĩa, hình ảnh minh hoạ và cách phát âm",
    icon: <FlashcardIcon />,
  },
  {
    key: 2,
    name: "Ghim từ muốn học",
    description:
      "Bạn có thể sử dụng chức năng ghim từ của VOCAB để tạo ra bộ từ vựng mà bạn muốn học",
    icon: <LearningIcon />,
  },
  {
    key: 3,
    name: "Kiểm tra từ vựng",
    description:
      "Bạn có thể kiểm tra từ vựng với bộ từ vựng của VOCAB hoặc bộ từ vựng mà bạn đã ghim",
    icon: <ExaminationIcon />,
  },
];

const Features = () => {
  return (
    <section className={classes.features}>
      {features.map((feature) => (
        <article className={classes.card} key={feature.key}>
          <div>{feature.icon}</div>
          <h4>{feature.name}</h4>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  );
};

export default Features;
