import './videoCardSkeleton.css'
const VideoCardSkeleton = () => {
  return (
    <div className="video-container-skeleton">
      <div className="video-thumbnail-skeleton"></div>
      <div className="video-info-skeleton">
        <div className="rating-bar-circular-skeleton"></div>
        <div className="video-title-skeleton"></div>
        <div className="video-release-date-skeleton"></div>
      </div>
    </div>
  );
}

export default VideoCardSkeleton