import { createSlice } from "@reduxjs/toolkit";

const initialState = { vocabsID: null, vocabularies: null };

const vocabsSlide = createSlice({
  name: "vocabs",
  initialState,
  reducers: {
    replaceVocabs(state, action) {
      state.vocabularies = action.payload.vocabularies;
      state.vocabsID = action.payload.vocabsID;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.vocabularies.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.vocabularies.push(newItem);
      }
    },
    removeItem(state, action) {
      state.vocabularies = state.vocabularies.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const vocabsActions = vocabsSlide.actions;
export default vocabsSlide.reducer;
