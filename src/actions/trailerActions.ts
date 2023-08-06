import * as actionTypes from "../actionTypes";
interface IStreamingTrailer {
  type: typeof actionTypes.STREAMING_TRAILER;
}
export const streamingTrailer = (): IStreamingTrailer => {
  return {
    type: actionTypes.STREAMING_TRAILER,
  };
};
interface IOnTrailer {
  type: typeof actionTypes.TV_TRAILER;
}
export const onTVTrailer = (): IOnTrailer => {
  return {
    type: actionTypes.TV_TRAILER,
  };
};
interface IForRentTrailer {
  type: typeof actionTypes.RENT_TRAILER;
}
export const forRentTrailer = (): IForRentTrailer => {
  return {
    type: actionTypes.RENT_TRAILER,
  };
};
interface IInTheatresTrailer {
  type: typeof actionTypes.THEATRES_TRAILER;
}
export const inTheatresTrailer = (): IInTheatresTrailer => {
  return {
    type: actionTypes.THEATRES_TRAILER,
  };
};
export type TrailerAction =
  | IStreamingTrailer
  | IOnTrailer
  | IForRentTrailer
  | IInTheatresTrailer;
