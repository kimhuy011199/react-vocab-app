import React from "react";
import CategoryList from "../../components/Category/CategoryList";
import Error from "../../components/UI/Error/Error";
import LearningError from "../../components/Learning/LearningError";
import Heading from "../../components/UI/Heading/Heading";
import { useSelector } from "react-redux";

const MyLearning = () => {
  const categories = useSelector((state) => state.learning.categories);

  if (!categories) {
    return <Error />;
  }

  if (categories.length === 0) {
    const content = {
      message: "Bạn chưa học chủ đề nào!",
      link: "Bắt đầu học ngay",
      url: "/",
    };
    return <LearningError content={content} />;
  }

  console.log(categories);

  return (
    <>
      <Heading heading="Chủ đề bạn đang học" />
      <CategoryList categoryList={categories} />
    </>
  );
};

export default MyLearning;
