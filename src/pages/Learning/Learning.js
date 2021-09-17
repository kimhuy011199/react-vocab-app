import React, { useEffect, useContext } from "react";
import { getSingleCategory } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import LearningSlider from "../../components/Learning/LearningSlider";
import { useParams } from "react-router-dom";
import Loading from "../../components/UI/Loading/Loading";
import Error from "../../components/UI/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { learningActions } from "../../store/learning-slice";
import { updateLearning } from "../../store/learning-action";
import AuthContext from "../../store/authContext";

const Learning = () => {
  const { data, error, status, requestFunction } = useFetch(
    getSingleCategory,
    true
  );

  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.learning.categories);
  const learningID = useSelector((state) => state.learning.learningID);

  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    requestFunction(slug);
  }, [requestFunction, slug]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "completed" && error) {
    return <Error />;
  }

  if (!categories.some((item) => item.id === data[0].id)) {
    dispatch(learningActions.addItem(data[0]));
    dispatch(
      updateLearning(
        {
          userID: authContext.id,
          categories: categories,
        },
        learningID
      )
    );
  }

  return (
    <LearningSlider
      data={data[0].vocabularies}
      name={data[0].name}
      slug={data[0].slug}
    />
  );
};

export default Learning;
