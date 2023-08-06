import { Dispatch, ReactNode } from "react";
import "./movieWidget.css";
import Selector from "../selector/Selector";
import { TrendingAction } from "../../actions/trendingActions";
import { PopularActions } from "../../actions/popularActions";
import { TrailerAction } from "../../actions/trailerActions";
import { WatchActions } from "../../actions/watchActions";
interface IMovieWidgetProps {
  bgImage?: string;
  headerText: string;
  selectorData: ISelector[];
  dispatch: Dispatch<
    TrendingAction | PopularActions | TrailerAction | WatchActions
  >;
  children: ReactNode;
  data: {};
}
export interface ISelector {
  id: number;
  text: string;
  setSelector: () =>
    | TrendingAction
    | PopularActions
    | TrailerAction
    | WatchActions;
}
const MovieWidget: React.FC<IMovieWidgetProps> = ({
  bgImage,
  headerText,
  children,
  dispatch,
  selectorData,
}) => {
  return (
    <section className="movie-widget">
      <div
        className="moviewidget__container"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="column-header">
          <div className="header-text">{headerText}</div>
          <Selector dispatch={dispatch} selectorData={selectorData} />
        </div>
        {children}
      </div>
    </section>
  );
};

export default MovieWidget;
