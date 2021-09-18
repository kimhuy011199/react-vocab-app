import React from "react";
import { useSelector } from "react-redux";

import VocabsList from "../../components/Vocabs/VocabsList";
import Error from "../../components/UI/Error/Error";
import LearningError from "../../components/Learning/LearningError";
import Heading from "../../components/UI/Heading/Heading";

const MyVocabs = () => {
  const vocabs = useSelector((state) => state.vocabs.vocabularies);

  if (!vocabs) {
    return <Error />;
  }

  if (vocabs.length === 0) {
    const content = {
      message: "Bạn ghim từ vựng nào!",
      link: "Bắt đầu ghim từ ngay",
      url: "/",
    };
    return <LearningError content={content} />;
  }

  return (
    <>
      <Heading heading="Các từ vựng đã ghim" />
      <VocabsList vocabsList={vocabs} />
    </>
  );
};

export default MyVocabs;
