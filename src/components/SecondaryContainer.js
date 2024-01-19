import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      {movies && (
        <div className="mt-0 md:-mt-60 pl-4 md:pl-12 relative z-20">
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
