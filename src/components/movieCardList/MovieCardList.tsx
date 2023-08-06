import "./movieCardList.css";
import MovieCard from "../movieCard/MovieCard";
import MovieCardSkeleton from "../movieCardSkeleton/MovieCardSkeleton";

// const apiCache = {};
interface IMovieCardList {
  movieData: {};
  isMovieData: boolean;
  isError: string;
}
const MovieCardList: React.FC<IMovieCardList> = ({
  movieData,
  isMovieData,
}) => {

  let dummyMovie: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="movie-list-container">
      {isMovieData && dummyMovie.map(() => <MovieCardSkeleton />)}
      {movieData &&
        movieData.results.map((movie: any) => <MovieCard movie={movie} />)}
    </div>
  );
};

export default MovieCardList;

/**
 * What's Popular StreamingOn TV  For Rent  In Theaters  -> TV Series Api
 *
 */
