export interface ICardInitialState {
  data: Array<Icard>;
  isLoading: boolean;
  responce: {
    status: number;
    message: string;
  };
}

export interface Icard {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IImageData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IImageIntialState {
  data: Array<IImageData>;
  isLoading: boolean;
  responce: {
    status: number;
    message: string;
  };
}
export interface IReview {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface IReviewsIntialState {
  data: Array<IReview>;
  isLoading: boolean;
  responce: {
    status: number;
    message: string;
  };
}
