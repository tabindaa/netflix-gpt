import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import { setUserSelectedMovie } from "../utils/moviesSlice";

const MovieList = ({ title, movies }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMovieCardClick = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id == movieId);
    dispatch(setUserSelectedMovie(selectedMovie));
    navigate("/details");
  };
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movieId={movie.id}
                  posterPath={movie.poster_path}
                  onMovieClick={handleMovieCardClick}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
