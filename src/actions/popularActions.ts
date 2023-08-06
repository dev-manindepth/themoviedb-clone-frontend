import * as actionTypes from "../actionTypes";
export interface IStreamingPopular {
  type: typeof actionTypes.STREAMING_POPULAR;
}
export const streamingPopular = (): IStreamingPopular => {
  return {
    type: actionTypes.STREAMING_POPULAR,
  };
};
export interface IOnTvPopular {
  type: typeof actionTypes.TV_POPULAR;
}
export const onTVPopular = (): IOnTvPopular => {
  return {
    type: actionTypes.TV_POPULAR,
  };
};
export interface IForRentPopular {
  type: typeof actionTypes.RENT_POPULAR;
}
export const forRentPopular = (): IForRentPopular => {
  return {
    type: actionTypes.RENT_POPULAR,
  };
};
export interface IIntheatresPopular {
  type: typeof actionTypes.THEATRES_POPULAR;
}
export const inTheatresPopular = (): IIntheatresPopular => {
  return {
    type: actionTypes.THEATRES_POPULAR,
  };
};

export type PopularActions =
  | IForRentPopular
  | IIntheatresPopular
  | IOnTvPopular
  | IStreamingPopular;
