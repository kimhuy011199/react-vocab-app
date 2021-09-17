import { learningActions } from "./learning-slice";
import { getMyLearningByID } from "../api/api";
import { updateMyLearning } from "../api/api";

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
          learningID: data[0].id,
        })
      );
    } catch (error) {
      dispatch(
        learningActions.replaceLearning({
          categories: null,
          learningID: null,
        })
      );
    }
  };
};

export const updateLearning = (dataObject, learningID) => {
  return async (dispatch) => {
    try {
      await updateMyLearning(dataObject, learningID);
    } catch (error) {
      console.log(error);
    }
  };
};
