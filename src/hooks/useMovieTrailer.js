import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { options } from "../helper/Constant";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const movie = await result.json();
    const movieTrailer =
      movie.results.find((res) => res.type == "Trailer") || movie.results[0];
    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return <div>useMovieTrailer</div>;
};

export default useMovieTrailer;
