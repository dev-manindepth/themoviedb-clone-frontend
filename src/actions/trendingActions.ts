import * as actionTypes from "../actionTypes";
interface ITrendingToday {
  type: typeof actionTypes.TODAY;
}
export const trendingToday = (): ITrendingToday => {
  return {
    type: actionTypes.TODAY,
  };
};
interface ITrendingThisWeek {
  type: typeof actionTypes.THIS_WEEK;
}
export const trendingThisWeek = (): ITrendingThisWeek => {
  return {
    type: actionTypes.THIS_WEEK,
  };
};

export type TrendingAction = ITrendingThisWeek | ITrendingToday;
