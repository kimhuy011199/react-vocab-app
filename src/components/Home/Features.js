import React from "react";
import classes from "./Features.module.css";
import FlashcardIcon from "../Icons/FlashcardIcon";
import ExaminationIcon from "../Icons/ExaminationIcon";
import LearningIcon from "../Icons/LearningIcon";

const features = [
  {
    key: 1,
    name: "Flashcard 2 mặt",
    description:
      "Bạn sẽ được học từ vựng bằng flashcard 2 mặt, gồm định nghĩa, hình ảnh minh hoạ và cách phát âm",
    icon: <FlashcardIcon />,
  },
  {
    key: 2,
    name: "Ghim từ muốn học",
    description:
      "Bạn có thể sử dụng chức năng ghim từ để ghim những từ bạn muốn học một cách riêng lẻ",
    icon: <LearningIcon />,
  },
  {
    key: 3,
    name: "Kiểm tra từ vựng",
    description:
      "Bạn có thể kiểm tra vốn từ vựng của mình bằng chức năng Examination của hệ thống",
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
