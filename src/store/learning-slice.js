import { createSlice } from "@reduxjs/toolkit";

const initialState = { learningID: null, categories: null };

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {
    replaceLearning(state, action) {
      state.categories = action.payload.categories;
      state.learningID = action.payload.learningID;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.categories.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.categories.push(newItem);
      }
    },
  },
});

export const learningActions = learningSlice.actions;
export default learningSlice.reducer;
