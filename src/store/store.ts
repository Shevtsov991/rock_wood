import cardSliceReducer from "./slices/cardSlice";
import imagesSliceReducer from "./slices/imagesSlice";
import reviewsSliceReducer from "./slices/reviewsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cardSliceReducer,
  imagesSliceReducer,
  reviewsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
