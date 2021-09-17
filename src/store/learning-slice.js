import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: null };

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {
    replaceLearning(state, action) {
      state.categories = action.payload.categories;
    },
  },
});

export const learningActions = learningSlice.actions;
export default learningSlice.reducer;
