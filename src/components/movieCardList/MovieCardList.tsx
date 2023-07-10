import "./movieCardList.css";
import MovieCard from "../movieCard/MovieCard";
import useFetch from "../../hooks/useFetch";
import MovieCardSkeleton from "../movieCardSkeleton/MovieCardSkeleton";

// const apiCache = {};
interface IMovieCardList {
  selected: string;
}
const MovieCardList: React.FC<IMovieCardList> = ({ selected }) => {
  const [movies, isMovieLoading] = useFetch(
    `${process.env.BASE_URL}/trending/all/${selected}?language=en-US`
  );
  let dummyMovie: number[] = [0,0,0,0,0,0,0,0,0,0];
  return (
    <div className="movie-list-container">
      {isMovieLoading &&
        dummyMovie.map(() => <MovieCardSkeleton />)}
      {movies &&
        movies.results.map((movie: any) => <MovieCard movie={movie} />)}
    </div>
  );
};

export default MovieCardList;

/**
 * What's Popular StreamingOn TV  For Rent  In Theaters  -> TV Series Api
 *
 */
