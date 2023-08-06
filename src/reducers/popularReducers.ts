import { TrailerAction } from "../actions/trailerActions";
import * as ActionTypes from "../actionTypes";
import { IEndpoint } from "./trailerReducers";

type TPopularActive =
  | typeof ActionTypes.STREAMING_POPULAR
  | typeof ActionTypes.TV_POPULAR
  | typeof ActionTypes.RENT_POPULAR
  | typeof ActionTypes.THEATRES_POPULAR;

interface IPopularInitialState {
  endpoint: IEndpoint;
  active: TPopularActive;
  data: {};
}
export const popularInitialState: IPopularInitialState = {
  endpoint: {
    path: "/movie/popular",
    params: {},
  },
  active: ActionTypes.STREAMING_POPULAR,
  data: {},
};

export const popularReducer = (
  state: IPopularInitialState = popularInitialState,
  action: TrailerAction
): IPopularInitialState => {
  switch (action.type) {
    case ActionTypes.STREAMING_POPULAR: {
      return {
        ...state,
        endpoint: {
          path: "/movie/popular",
          params: {},
        },
        active: ActionTypes.STREAMING_POPULAR,
      };
    }
    case ActionTypes.TV_POPULAR: {
      return {
        ...state,
        endpoint: {
          path: "/tv/airing_today",
          params: {},
        },
        active: ActionTypes.TV_POPULAR,
      };
    }
    case ActionTypes.RENT_POPULAR: {
      return {
        ...state,
        endpoint: {
          path: "/discover/movie",
          params: {
            with_watch_monetization_types: "rent",
          },
        },
        active: ActionTypes.RENT_POPULAR,
      };
    }
    case ActionTypes.THEATRES_POPULAR: {
      return {
        ...state,
        endpoint: {
          path: "/movie/now_playing",
          params: {},
        },
        active: ActionTypes.THEATRES_POPULAR,
      };
    }
    default:
      return state;
  }
};
