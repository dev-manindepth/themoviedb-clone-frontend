import MovieWidget from "../movieWidget/MovieWidget";
import Welcome from "../welcome/Welcome";
import bg1 from "../../assets/bg1.svg";
import MovieCardList from "../movieCardList/MovieCardList";
import { Suspense, useState } from "react";
import Skeleton from "../skeleton/Skeleton";
// import { trendingSelector } from "../data";

const Main = () => {
  // const [trending,setTrending] = useState(trendingSelector);
  const [selectedTrending,setSelectedTrending]= useState("day")
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
      <MovieWidget
        bgImage={bg1}
        headerText="Trending"
        selectors={["day", "week"]}
        setSelectedTrending={setSelectedTrending}
        >
        <Suspense fallback={<Skeleton />}>
          <MovieCardList selected={selectedTrending} />
        </Suspense>
      </MovieWidget>
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
      <div></div>
    </main>
  );
};

export default Main;
