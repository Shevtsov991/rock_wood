import { AxiosResponse } from "axios";
import { cardService } from "../../services/apiService";

import { reviewsSlice } from "../slices/reviewsSlice";
import { AppDispatch } from "../store";
import { IReview } from "../../types/templates";

export const fetchReviews =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(reviewsSlice.actions.fetchReviews());
      const res = await cardService.getCards(payload);
      if (res.status === 200) {
        dispatch(
          reviewsSlice.actions.fetchReviewsSuccses(
            res as AxiosResponse<Array<IReview>>
          )
        );
      } else {
        dispatch(
          reviewsSlice.actions.fetchReviewsError(
            res as AxiosResponse<Array<IReview>>
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
