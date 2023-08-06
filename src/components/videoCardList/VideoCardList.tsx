import { useState } from "react";
import VideoCard from "../videoCard/VideoCard";
import VideoCardSkeleton from "../videoCardSkeleton/VideoCardSkeleton";
import "./videoCardList.css";
import useFetch from "../../hooks/useFetch";
interface IVideoCardList {
  movieData: any;
  isMovieData: boolean;
  isError: string;
  trailerData:any;
}
const VideoCardList: React.FC<IVideoCardList> = ({
  movieData,
  isMovieData,
}) => {
  // const [trailer] = useFetch({ path: `/movie/667538/videos`, params: {} });
  // console.log(
  //   "trailer data",
  //   trailer?.results?.filter((data:any) => data.type === "Trailer")
  // );

  let dummyMovie: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return <div className="movie-list-container"></div>;
};

export default VideoCardList;
