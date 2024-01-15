import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="px-4 bg-black">
      {movies && (
        <div className="-mt-60 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList
            title={"Trending Movies"}
            movies={movies?.trendingMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MovieList
            title={"Top Rated TV Series"}
            movies={movies?.topRatedTVSeries}
          />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
