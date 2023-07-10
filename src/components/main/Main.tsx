import MovieWidget from "../movieWidget/MovieWidget";
import Welcome from "../welcome/Welcome";
import bg1 from "../../assets/bg1.svg";
import MovieCardList from "../movieCardList/MovieCardList";
import { Suspense, useState } from "react";
import Skeleton from "../movieCardSkeleton/Skeleton";
import "./main.css";
const Main = () => {
  // const [trending,setTrending] = useState(trendingSelector);
  const [selectedTrending, setSelectedTrending] = useState("day");
  return (
    <main>
      <Welcome />
      <div className="widget-list">
        {/* <MovieWidget
        bgImage={bg1}
        headerText="Trending"
        
        >
        <Suspense fallback={<Skeleton />}>
          <MovieCardList selected={} />
        </Suspense>
      </MovieWidget> */}
        <Suspense fallback={<Skeleton />}>
          <MovieWidget
            bgImage={bg1}
            headerText="Trending"
            selectors={["day", "week"]}
            setSelectedTrending={setSelectedTrending}
          >
            <MovieCardList selected={selectedTrending} />
          </MovieWidget>
        </Suspense>
        {/* <MovieWidget
        bgImage={bg1}
        headerText="Trending"
        selectors={["day", "week"]}
        setSelectedTrending={setSelectedTrending}
        >
        <Suspense fallback={<Skeleton />}>
          <MovieCardList selected={selectedTrending} />
        </Suspense>
      </MovieWidget> */}
      </div>
      <div>
      </div>
    </main>
  );
};

export default Main;
