import { Dispatch, useState } from "react";
import "./selector.css";
import { TrendingAction } from "../../actions/trendingActions";
import { ISelector } from "../movieWidget/MovieWidget";
import { PopularActions } from "../../actions/popularActions";
import { TrailerAction } from "../../actions/trailerActions";
import { WatchActions } from "../../actions/watchActions";
interface ISelectorProp {
  dispatch: Dispatch<
    TrendingAction | PopularActions | TrailerAction | WatchActions
  >;
  selectorData: ISelector[];
}

const Selector: React.FC<ISelectorProp> = ({ dispatch, selectorData }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="selector_wrapper">
      <div className="selector">
        {selectorData.map(({ id, text, setSelector }, idx) => {
          return (
            <div
              key={id}
              className={idx == active ? "selected" : ""}
              onClick={() => {
                dispatch(setSelector());
                setActive(idx);
              }}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Selector;
