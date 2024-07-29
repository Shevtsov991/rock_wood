import { AppDispatch } from "../store";
import { cardSlice } from "../slices/cardSlice";
import { cardService } from "../../services/apiService";
import { Icard } from "../../types/templates";
import { AxiosResponse } from "axios";

export const fetchCard = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(cardSlice.actions.fetchCards());
    const res = await cardService.getCards(payload);
    if (res.status === 200) {
      dispatch(
        cardSlice.actions.fetchCardsSuccses(res as AxiosResponse<Array<Icard>>)
      );
    } else {
      dispatch(
        cardSlice.actions.fetchCardError(res as AxiosResponse<Array<Icard>>)
      );
    }
  } catch (error) {
    console.log(error);
  }
};
