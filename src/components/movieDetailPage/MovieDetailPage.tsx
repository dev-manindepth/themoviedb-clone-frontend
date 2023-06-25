import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetailPage.css";
import CircularProgress from "../progress/CircularProgress";
import thumbnails from "../../assets/thumbnails.png";
import heart from "../../assets/heart.png";
import bookmark from "../../assets/bookmark.png";
import star from "../../assets/star.png";
import Profile from "../profile/Profile";
import Tabs from "../tabs/Tabs";
const getYear = (date: string) => {
  return new Date(date).getFullYear();
};
const MovieDetailPage = () => {
  const [reviewActive, setReviewActive] = useState<"review" | "discussion">(
    "review"
  );
  const [movie, setMovie] = useState<ApiResponse | undefined>(undefined);
  const [credits, setCredits] = useState<CreditResponse | undefined>(undefined);
  const [reviews, setReviews] = useState<ReviewResponse | undefined>(undefined);
  const { movieId, tvId } = useParams();

  type ApiResponse = ResponseType<typeof fetchMoviesById>;
  type CreditResponse = ResponseType<typeof fetchMovieCredit>;
  type ReviewResponse = ResponseType<typeof fetchMovieReview>;
  type ResponseType<T> = T extends Promise<infer R> ? R : any;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.JWT}`,
    },
  };
  async function fetchMoviesById(): Promise<Response> {
    const response = await fetch(
      `${process.env.BASE_URL}/${movieId ? "movie" : "tv"}/${
        movieId ? movieId : tvId
      }`,
      options
    );
    return await response.json();
  }
  async function fetchMovieCredit(): Promise<Response> {
    const response = await fetch(
      `${process.env.BASE_URL}/${movieId ? "movie" : "tv"}/${
        movieId ? movieId : tvId
      }/credits`,
      options
    );
    return await response.json();
  }
  async function fetchMovieReview(): Promise<Response> {
    const response = await fetch(
      `${process.env.BASE_URL}/${movieId ? "movie" : "tv"}/${
        movieId ? movieId : tvId
      }/reviews`,
      options
    );
    return await response.json();
  }
  useEffect(() => {
    fetchMoviesById().then((data) => setMovie(data));
  }, [movieId, tvId]);
  useEffect(() => {
    fetchMovieCredit().then((data) => setCredits(data));
  }, [movieId, tvId]);
  useEffect(() => {
    fetchMovieReview().then((data) => setReviews(data));
  }, [movieId, tvId]);
  console.log("detail page -->", movie);
  console.log("movie credit", credits);
  console.log("Movie reviews", reviews);

  return (
    <div>
      <Suspense fallback={<h1>Loading</h1>}>
        {movie && (
          <div
            className="movie-banner-large"
            style={{
              background: `linear-gradient(to bottom right, rgba(31.5, 10.5, 10.5, 1), rgba(31.5, 10.5, 10.5, 0.84)), url(${
                process.env.IMAGE_PATH_LG
              }${
                movie.backdrop_path ? movie.backdrop_path : movie.poster_path
              })`,
            }}
          >
            <div className="movie-container">
              <div className="movie-image-container">
                <img
                  src={`${process.env.IMAGE_PATH_MD}${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="movie-details">
                <div className="movie-header-info">
                  <div className="movie-header">
                    {movie.original_title}
                    {movie.release_date && (
                      <span className="movie-release-year">
                        ({getYear(movie.release_date)})
                      </span>
                    )}
                  </div>
                  <div className="movie-subheader">
                    {movie.genres.map((genre: any, index: number) => (
                      <span key={genre.id}>
                        {genre.name}{" "}
                        {movie.genres.length - 1 != index ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <div className="movie-user-actions">
                    <div className="progress-bar-action">
                      <div className="progress-chart">
                        <CircularProgress vote_average={movie.vote_average} />
                      </div>
                      <div>
                        User <br /> Score
                      </div>
                    </div>
                    <div className="user-personalise">
                      <div className="tooltip">
                        <img src={thumbnails} alt="" />
                        <div className="tooltip-text">Add to list</div>
                      </div>

                      <div className="tooltip">
                        <img src={heart} alt="" />
                        <div className="tooltip-text">Mark as favourite</div>
                      </div>

                      <div className="tooltip">
                        <img src={bookmark} alt="" />
                        <div className="tooltip-text">
                          Add to your watchlist
                        </div>
                      </div>

                      <div className="tooltip">
                        <img src={star} alt="" />
                        <div className="tooltip-text">Rate it!</div>
                      </div>
                      <div className="play-trailer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="glyphicons-basic"
                          viewBox="0 0 32 32"
                          width={24}
                          height={24}
                        >
                          <path
                            id="play"
                            d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
                            fill="#fff"
                          />
                        </svg>

                        <p>Play Trailer</p>
                      </div>
                    </div>
                  </div>
                  <div className="tagline">{movie.tagline}</div>
                  <div className="overview">
                    <div className="overview-header">Overview</div>
                    <div className="overview-text">{movie.overview}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {credits && (
          <>
            <div className="movie-cast-title">Top Billed Cast</div>
            <div className="movie-credits">
              {credits.cast.length > 10 &&
                credits.cast
                  .slice(0, 18)
                  .map((credit: any) => <Profile person={credit} />)}
            </div>
          </>
        )}
        {reviews && (
          <section>
            <div className="review-section-header">
              <div>Social</div>{" "}
              <Tabs
                tabList={["Reviews", "Discussion"]}
                setActiveTab={setReviewActive}
              />
            </div>
            {reviewActive == "review" ? (
              <div className="review-container"></div>
            ) : (
              <div></div>
            )}
          </section>
        )}
      </Suspense>
    </div>
  );
};

export default MovieDetailPage;
