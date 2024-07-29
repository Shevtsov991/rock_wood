import { RootState } from "./store";

export const cardDataSelector = (state: RootState) => state.cardSliceReducer;
export const ImageDataSelector = (state: RootState) => state.imagesSliceReducer;
export const ReviewsDataSelector = (state: RootState) =>
  state.reviewsSliceReducer;
