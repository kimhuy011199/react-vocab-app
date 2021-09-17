import { createSlice } from "@reduxjs/toolkit";

const initialState = { vocabularies: null };

const vocabsSlide = createSlice({
  name: "vocabs",
  initialState,
  reducers: {
    replaceVocabs(state, action) {
      state.vocabularies = action.payload.vocabularies;
    },
  },
});

export const vocabsActions = vocabsSlide.actions;
export default vocabsSlide.reducer;
