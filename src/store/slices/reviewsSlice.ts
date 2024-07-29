import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReview, IReviewsIntialState } from "../../types/templates";
import { AxiosResponse } from "axios";

const initialState: IReviewsIntialState = {
  data: [],
  isLoading: false,
  responce: {
    status: 0,
    message: "",
  },
};

export const reviewsSlice = createSlice({
  name: "image_slice",
  initialState,
  reducers: {
    fetchReviews(state) {
      state.isLoading = true;
    },
    fetchReviewsSuccses(
      state,
      action: PayloadAction<AxiosResponse<Array<IReview>>>
    ) {
      state.data = action.payload.data;
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchReviewsError(
      state,
      action: PayloadAction<AxiosResponse<Array<IReview>>>
    ) {
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default reviewsSlice.reducer;
