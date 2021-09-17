import React, { useContext, useEffect } from "react";
import { getMyLearningByID } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import CategoryList from "../../components/Category/CategoryList";
import Loading from "../../components/UI/Loading/Loading";
import Error from "../../components/UI/Error/Error";
import AuthContext from "../../store/authContext";
import LearningError from "../../components/Learning/LearningError";
import Heading from "../../components/UI/Heading/Heading";

const MyLearning = () => {
  const authContext = useContext(AuthContext);
  const { id } = authContext;

  const { data, error, status, requestFunction } = useFetch(
    getMyLearningByID,
    true
  );

  useEffect(() => {
    requestFunction(id);
  }, [requestFunction, id]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "completed" && error) {
    return <Error />;
  }

  if (status === "completed" && data[0].categories.length === 0) {
    const content = {
      message: "Bạn chưa học chủ đề nào!",
      link: "Bắt đầu học ngay",
      url: "/",
    };
    return <LearningError content={content} />;
  }

  return (
    <>
      <Heading heading="Chủ đề bạn đang học" />
      <CategoryList categoryList={data[0].categories} />
    </>
  );
};

export default MyLearning;
