import MovieWidget from "../movieWidget/MovieWidget";
import Welcome from "../welcome/Welcome";
import bg1 from "../../assets/bg1.svg";
import MovieCardList from "../movieCardList/MovieCardList";
import { Dispatch, Suspense, useEffect, useReducer } from "react";
import Skeleton from "../movieCardSkeleton/Skeleton";
import "./main.css";

import {
  trendingInitialState,
  trendingReducer,
} from "../../reducers/trendingReducers";
import { trendingThisWeek, trendingToday } from "../../actions";
import useFetch from "../../hooks/useFetch";
import { TrendingAction } from "../../actions/trendingActions";
import {
  PopularActions,
  forRentPopular,
  inTheatresPopular,
  onTVPopular,
  streamingPopular,
} from "../../actions/popularActions";
import {
  TrailerAction,
  forRentTrailer,
  inTheatresTrailer,
  onTVTrailer,
  streamingTrailer,
} from "../../actions/trailerActions";
import { WatchActions, freeMovies, freeTVs } from "../../actions/watchActions";
import {
  popularInitialState,
  popularReducer,
} from "../../reducers/popularReducers";
import { watchIntialState, watchReducers } from "../../reducers/watchReducers";
import {
  trailerInitialState,
  trailerReducer,
} from "../../reducers/trailerReducers";
import VideoCardList from "../videoCardList/VideoCardList";
const Main = () => {
  const [trendingState, trendingDispatch] = useReducer(
    trendingReducer,
    trendingInitialState
  );
  const [trailerState, trailerDispatch] = useReducer(
    trailerReducer,
    trailerInitialState
  );
  const [popularState, popularDispatch] = useReducer(
    popularReducer,
    popularInitialState
  );
  const [freeMovieState, freeMovieDispatch] = useReducer(
    watchReducers,
    watchIntialState
  );
  const [trendingMovie, isTrendingMovie, isTrendingMovieError] = useFetch(
    trendingState.endpoint
  );
  const [trailerMovieData, isTrailerMovieData, isTrailerMovieError] = useFetch(
    trailerState.endpoint
  );
  const [popularMovie, isPopularMovie, isPopularMovieError] = useFetch(
    popularState.endpoint
  );
  const [freeMovie, isFreeMovie, isFreeMovieError] = useFetch(
    freeMovieState.endpoint
  );
  useEffect(() => {
    trendingDispatch(trendingToday());
    // trailerDispatch(streamingTrailer());
    popularDispatch(streamingPopular());
    freeMovieDispatch(freeMovies());
  }, []);
  const combinedDispatch: Dispatch<
    TrendingAction | PopularActions | TrailerAction | WatchActions
  > = trendingDispatch;
  const popularDispatchN: Dispatch<
    TrendingAction | PopularActions | TrailerAction | WatchActions
  > = popularDispatch;
  const freeMovieDispatchTemp: Dispatch<
    TrendingAction | PopularActions | TrailerAction | WatchActions
  > = freeMovieDispatch;
  // const trailerMovieDispatchTemp: Dispatch<
  //   TrendingAction | PopularActions | TrailerAction | WatchActions
  // > = trailerDispatch;
  console.log("streaming data", popularMovie);
  return (
    <main>
      <Welcome />
      <div className="widget-list">
        <Suspense fallback={<Skeleton />}>
          <MovieWidget
            bgImage={bg1}
            headerText="Trending"
            selectorData={[
              { id: 1, text: "Today", setSelector: trendingToday },
              { id: 2, text: "This Week", setSelector: trendingThisWeek },
            ]}
            dispatch={combinedDispatch}
            data={trendingMovie}
          >
            <MovieCardList
              isError={isTrendingMovieError}
              isMovieData={isTrendingMovie}
              movieData={trendingMovie}
            />
          </MovieWidget>
        </Suspense>
        {/* <MovieWidget
          bgImage=""
          headerText="Video"
          selectorData={[
            { id: 1, text: "Streaming", setSelector: streamingTrailer },
            { id: 2, text: "On TV", setSelector: onTVTrailer },
            { id: 3, text: "For Rent", setSelector: forRentTrailer },
            { id: 4, text: "In Theaters", setSelector: inTheatresTrailer },
          ]}
          dispatch={trailerMovieDispatchTemp}
          data={trailerMovieData}
        >
          <VideoCardList
            isError={isTrailerMovieError}
            isMovieData={isTrailerMovieData}
            movieData={trailerMovieData}
            trailerData={trailerMovieData?.results.map(
              (movie: any) => movie.id
            )}
          />
        </MovieWidget> */}
        <MovieWidget
          bgImage=""
          headerText="What's Popular"
          selectorData={[
            { id: 1, text: "Streaming", setSelector: streamingPopular },
            { id: 2, text: "On TV", setSelector: onTVPopular },
            { id: 3, text: "For Rent", setSelector: forRentPopular },
            { id: 4, text: "In Theaters", setSelector: inTheatresPopular },
          ]}
          dispatch={popularDispatchN}
          data={popularMovie}
        >
          <MovieCardList
            isError={isPopularMovieError}
            isMovieData={isPopularMovie}
            movieData={popularMovie}
          />
        </MovieWidget>
        <MovieWidget
          bgImage=""
          headerText="Free to Watch"
          selectorData={[
            { id: 1, text: "Movies", setSelector: freeMovies },
            { id: 2, text: "TV", setSelector: freeTVs },
          ]}
          dispatch={freeMovieDispatchTemp}
          data={freeMovie}
        >
          <MovieCardList
            isError={isFreeMovieError}
            isMovieData={isFreeMovie}
            movieData={freeMovie}
          />
        </MovieWidget>
      </div>
      
    </main>
  );
};

export default Main;
