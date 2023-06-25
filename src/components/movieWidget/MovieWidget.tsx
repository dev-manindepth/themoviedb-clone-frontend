import { ReactNode } from "react";
import "./movieWidget.css";
import Selector from "../selector/Selector";

interface IMovieWidgetProps {
  bgImage?: string;
  headerText: string;
  selectors: string[];
  children: ReactNode;
  setSelectedTrending:(str:string)=>void;
}
const MovieWidget: React.FC<IMovieWidgetProps> = ({
  bgImage,
  headerText,
  selectors,
  children,
  setSelectedTrending
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
          <Selector
            selectors={selectors}
            setSelectedTrending={setSelectedTrending}
          />
        </div>

        {children}
      </div>
    </section>
  );
};

export default MovieWidget;
