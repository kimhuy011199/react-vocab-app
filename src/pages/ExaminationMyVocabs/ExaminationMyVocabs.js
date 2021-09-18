import React from "react";
import { useSelector } from "react-redux";

import ExaminationSlider from "../../components/Examination/ExaminationSlider";
import LearningError from "../../components/Learning/LearningError";

const ExaminationMyVocabs = () => {
  const vocabs = useSelector((state) => state.vocabs.vocabularies);

  if (!vocabs || vocabs.length === 0) {
    const content = {
      message: "Bạn ghim từ vựng nào!",
      link: "Bắt đầu ghim từ ngay",
      url: "/",
    };
    return <LearningError content={content} />;
  }

  return (
    <ExaminationSlider
      data={vocabs}
      name="myvocabs"
      slug="myvocabs"
      isMyVocabs={true}
    />
  );
};

export default ExaminationMyVocabs;
