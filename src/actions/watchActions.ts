import * as actionTypes from "../actionTypes";
interface IFreeMovies {
  type: typeof actionTypes.MOVIES_FREE;
}
export const freeMovies = (): IFreeMovies => {
  return {
    type: actionTypes.MOVIES_FREE,
  };
};
interface IFreeTVs {
  type: typeof actionTypes.TV_FREE;
}
export const freeTVs = (): IFreeTVs => {
  return {
    type: actionTypes.TV_FREE,
  };
};

export type WatchActions = IFreeMovies | IFreeTVs;
