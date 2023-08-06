import * as ActionTypes from "../actionTypes";
import { WatchActions } from "../actions/watchActions";
import { IEndpoint } from "./trailerReducers";

type TWatchActive = typeof ActionTypes.MOVIES_FREE | typeof ActionTypes.TV_FREE;
interface IWatchInitialState {
  endpoint: IEndpoint;
  active: TWatchActive;
  data: {};
}
export const watchIntialState: IWatchInitialState = {
  endpoint: {
    path: "/discover/movie",
    params: {},
  },
  active: ActionTypes.MOVIES_FREE,
  data: {},
};
export const watchReducers = (
  state: IWatchInitialState = watchIntialState,
  action: WatchActions
): IWatchInitialState => {
  switch (action.type) {
    case ActionTypes.MOVIES_FREE: {
      return {
        ...state,
        endpoint: {
          path: "/discover/movie",
          params: {
            with_watch_monetization_types: "free",
          },
        },
        active: ActionTypes.MOVIES_FREE,
      };
    }
    case ActionTypes.TV_FREE: {
      return {
        ...state,
        endpoint: {
          path: "/discover/tv",
          params: {
            with_watch_monetization_types: "free",
          },
        },
      };
    }
    default:
      return state;
  }
};
