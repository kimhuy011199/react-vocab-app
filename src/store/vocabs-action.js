import { vocabsActions } from "./vocabs-slice";
import { getMyVocabsByID } from "../api/api";

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
        })
      );
    } catch (error) {
      dispatch(
        vocabsActions.replaceVocabs({
          vocabularies: null,
        })
      );
    }
  };
};
