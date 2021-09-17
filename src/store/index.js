import { configureStore } from "@reduxjs/toolkit";

import vocabsReducer from "./vocabs-slice";

const store = configureStore({
  reducer: { vocabs: vocabsReducer },
});

export default store;
