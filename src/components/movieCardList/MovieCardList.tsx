import { useEffect, useState } from "react";
import "./movieCardList.css";
import MovieCard from "../movieCard/MovieCard";

// const apiCache = {};
interface IMovieCardList{
  selected:string
}
const MovieCardList:React.FC<IMovieCardList> = ({selected}) => {
  const [movies, setMovies] = useState<any>();
  const fetchMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.JWT}`,
      },
    };
    const response = await fetch(
      `${process.env.BASE_URL}/trending/all/${selected}?language=en-US`,
      options
    );
    const data = await response.json();
    setMovies(data);
  };
  useEffect(() => {
    fetchMovie();
  }, [selected]);
  console.log('moviews',movies)
  return <div className="movie-list-container">
    {
     movies&&  movies.results.map((movie:any)=><MovieCard movie={movie}/>)
    }
  </div>;
};

export default MovieCardList;

/**
 * What's Popular StreamingOn TV  For Rent  In Theaters  -> TV Series Api
 * 
 */