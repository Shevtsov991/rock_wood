import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IImageData, IImageIntialState } from "../../types/templates";
import { AxiosResponse } from "axios";

const initialState: IImageIntialState = {
  data: [],
  isLoading: false,
  responce: {
    status: 0,
    message: "",
  },
};

export const imagesSlice = createSlice({
  name: "image_slice",
  initialState,
  reducers: {
    fetchImages(state) {
      state.isLoading = true;
    },
    fetchImagesSuccses(
      state,
      action: PayloadAction<AxiosResponse<Array<IImageData>>>
    ) {
      state.data = action.payload.data;
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchImagesError(
      state,
      action: PayloadAction<AxiosResponse<Array<IImageData>>>
    ) {
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default imagesSlice.reducer;
