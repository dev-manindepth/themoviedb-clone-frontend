import "./movieCardSkeleton.css";
const MovieCardSkeleton = () => {
  return (
    <div className="movie-container-skeleton">
      <div className="movie-thumbnail-skeleton"></div>
      <div className="movie-info-skeleton">
        <div className="rating-bar-circular-skeleton"></div>
        <div className="movie-title-skeleton"></div>
        <div className="movie-release-date-skeleton"></div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
