import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MovieDetailPage from "../movieDetailPage/MovieDetailPage";
import Error from "../error/Error";
import Main from "../main/Main";
import { Suspense } from "react";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/movie/:movieId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MovieDetailPage />
          </Suspense>
        ),
      },
      {
        path: "/tv/:tvId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MovieDetailPage />
          </Suspense>
        ),
      },
    ],
  },
]);
