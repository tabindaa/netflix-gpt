import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Browse from "./Browse";

const GptSearch = lazy(() => import("./GptSearch"));
const MovieDetails = lazy(() => import("./MovieDetails"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/search",
      element: (
        <Suspense>
          <GptSearch />
        </Suspense>
      ),
    },
    {
      path: "/details",
      element: (
        <Suspense>
          <MovieDetails />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
