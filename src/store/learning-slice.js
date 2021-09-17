import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: null };

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {
    replaceLearning(state, action) {
      state.categories = action.payload.categories;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.categories.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.categories.push(newItem);
        console.log(state.categories);
      }
    },
  },
});

export const learningActions = learningSlice.actions;
export default learningSlice.reducer;
