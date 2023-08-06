import { Link } from "react-router-dom";

interface IVideoCard{
    video:any
}
const VideoCard:React.FC<IVideoCard> = ({video}) => {
  return (
    <div className="video-card-container">
      <div className="video-thumbnail">
        <div className="loading-overlay"></div>
        <Link to={`/${video.media_type}/${video.id}`}>
          <img
            src={`${process.env.IMAGE_PATH_SM}${video.backdrop_path}`}
            alt=""
            loading="lazy"
          />
        </Link>
      </div>
      <div className="video-info">
        <Link to={`/${video.media_type}/${video.id}`} className="video-link">
          <h2 className="video-title">
            {video.name ? video.name : video.title}
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard