import { AxiosResponse } from "axios";
import { Icard, IImageData, IReview } from "../types/templates";
import api from "../axios";

export class cardService {
  static getCards(
    payload: string
  ): Promise<AxiosResponse<Array<Icard | IReview | IImageData>>> {
    return api.get<Array<any>>(`${payload}`);
  }
}
