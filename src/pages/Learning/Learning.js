import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import LearningSlider from "../../components/Learning/LearningSlider";
import Loading from "../../components/UI/Loading/Loading";
import Error from "../../components/UI/Error/Error";

import useFetch from "../../hooks/useFetch";
import { getSingleCategory } from "../../api/api";
import { learningActions } from "../../store/learning-slice";

const Learning = () => {
  const { data, error, status, requestFunction } = useFetch(
    getSingleCategory,
    true
  );

  const dispatch = useDispatch();

  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    requestFunction(slug);
  }, [requestFunction, slug]);

  useEffect(() => {
    if (data) {
      dispatch(learningActions.addItem(data[0]));
    }
  }, [dispatch, data]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "completed" && error) {
    return <Error />;
  }

  return (
    <LearningSlider
      data={data[0].vocabularies}
      name={data[0].name}
      slug={data[0].slug}
      isMyVocabs={false}
    />
  );
};

export default Learning;
