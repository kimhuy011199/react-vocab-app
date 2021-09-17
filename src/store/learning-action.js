import { learningActions } from "./learning-slice";
import { getMyLearningByID } from "../api/api";

export const fetchLearning = (id) => {
  return async (dispatch) => {
    try {
      const data = await getMyLearningByID(id);
      if (!data) {
        return;
      }
      dispatch(
        learningActions.replaceLearning({
          categories: data[0].categories,
        })
      );
    } catch (error) {
      dispatch(
        learningActions.replaceLearning({
          categories: null,
        })
      );
    }
  };
};