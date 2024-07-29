import { AxiosResponse } from "axios";
import { cardService } from "../../services/apiService";
import { IImageData } from "../../types/templates";
import { imagesSlice } from "../slices/imagesSlice";
import { AppDispatch } from "../store";

export const fetchImages =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(imagesSlice.actions.fetchImages());
      const res = await cardService.getCards(payload);
      if (res.status === 200) {
        dispatch(
          imagesSlice.actions.fetchImagesSuccses(
            res as AxiosResponse<Array<IImageData>>
          )
        );
      } else {
        dispatch(
          imagesSlice.actions.fetchImagesError(
            res as AxiosResponse<Array<IImageData>>
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
