import { TrailerAction } from "../actions/trailerActions";
import * as ActionTypes from "../actionTypes";

export interface IEndpoint {
  path: string;
  params?: {};
}
type TActive =
  | typeof ActionTypes.STREAMING_TRAILER
  | typeof ActionTypes.TV_TRAILER
  | typeof ActionTypes.RENT_TRAILER
  | typeof ActionTypes.THEATRES_TRAILER;

interface ITrailerInitialState {
  endpoint: IEndpoint;
  active: TActive;
  data: {};
}
export const trailerInitialState: ITrailerInitialState = {
  endpoint: {
    path: "/movie/popular",
    params: {},
  },
  active: ActionTypes.STREAMING_TRAILER,
  data: {},
};

export const trailerReducer = (
  state: ITrailerInitialState = trailerInitialState,
  action: TrailerAction
): ITrailerInitialState => {
  switch (action.type) {
    case ActionTypes.STREAMING_TRAILER: {
      return {
        ...state,
        endpoint: {
          path: "/movie/popular",
          params: {},
        },
        active: ActionTypes.STREAMING_TRAILER,
      };
    }
    case ActionTypes.TV_TRAILER: {
      return {
        ...state,
        endpoint: {
          path: "/tv/popular",
          params: {},
        },
        active: ActionTypes.TV_TRAILER,
      };
    }
    case ActionTypes.RENT_TRAILER: {
      return {
        ...state,
        endpoint: {
          path: "/discover/movie",
          params: {
            with_watch_monetization_types: "rent",
          },
        },
        active: ActionTypes.RENT_TRAILER,
      };
    }
    case ActionTypes.THEATRES_TRAILER: {
      return {
        ...state,
        endpoint: {
          path: "/movie/now_playing",
          params: {},
        },
        active: ActionTypes.THEATRES_TRAILER,
      };
    }
    default:
      return state;
  }
};
