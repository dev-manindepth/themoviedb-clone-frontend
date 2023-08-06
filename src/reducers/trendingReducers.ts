import * as ActionTypes from "../actionTypes";
import { TrendingAction } from "../actions/trendingActions";
import { IEndpoint } from "./trailerReducers";

type TTrendingActive = typeof ActionTypes.TODAY | typeof ActionTypes.THIS_WEEK;
interface ITrendingInitialState {
  endpoint: IEndpoint;
  active: TTrendingActive;
  data: {};
}
export const trendingInitialState: ITrendingInitialState = {
  endpoint: {
    path: "/trending/all/day",
    params: {},
  },
  active: ActionTypes.TODAY,
  data: {},
};

export const trendingReducer = (
  state: ITrendingInitialState = trendingInitialState,
  action: TrendingAction
): ITrendingInitialState => {
  switch (action.type) {
    case ActionTypes.TODAY: {
      return {
        ...state,
        endpoint: {
          path: "/trending/all/day",
          params: {},
        },
        active: ActionTypes.TODAY,
      };
    }
    case ActionTypes.THIS_WEEK:{
      return {
        ...state,
        endpoint:{
          path:"/trending/all/week"
        }
      }
    }
    default:
      return state;
  }
};
