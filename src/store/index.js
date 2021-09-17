import { configureStore } from "@reduxjs/toolkit";

import vocabsReducer from "./vocabs-slice";
import learningReducer from "./learning-slice";

const store = configureStore({
  reducer: { vocabs: vocabsReducer, learning: learningReducer },
});

export default store;
