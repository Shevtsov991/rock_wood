import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Icard, ICardInitialState } from "../../types/templates";

const initialState: ICardInitialState = {
  data: [],
  isLoading: false,
  responce: {
    status: 0,
    message: "",
  },
};

export const cardSlice = createSlice({
  name: "card_slice",
  initialState,
  reducers: {
    fetchCards(state) {
      state.isLoading = true;
    },
    fetchCardsSuccses(
      state,
      action: PayloadAction<AxiosResponse<Array<Icard>>>
    ) {
      state.data = action.payload.data;
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCardError(state, action: PayloadAction<AxiosResponse<Array<Icard>>>) {
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default cardSlice.reducer;
