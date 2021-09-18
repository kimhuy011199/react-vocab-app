import { vocabsActions } from "./vocabs-slice";
import { getMyVocabsByID } from "../api/api";
import { updateMyVocabs } from "../api/api";

export const fetchVocabs = (id) => {
  return async (dispatch) => {
    try {
      const data = await getMyVocabsByID(id);
      if (!data) {
        return;
      }
      dispatch(
        vocabsActions.replaceVocabs({
          vocabularies: data[0].vocabularies,
          vocabsID: data[0].id,
        })
      );
    } catch (error) {
      dispatch(
        vocabsActions.replaceVocabs({
          vocabularies: null,
          vocabsID: null,
        })
      );
    }
  };
};

export const updateVocabs = (dataObject, vocabsID) => {
  return async (dispatch) => {
    try {
      await updateMyVocabs(dataObject, vocabsID);
    } catch (error) {
      console.log(error);
    }
  };
};
