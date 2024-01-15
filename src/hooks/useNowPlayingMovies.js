import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options } from "../helper/Constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const jsonResult = await response.json();
    dispatch(addNowPlayingMovies(jsonResult.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  // return moviesList
};

export default useNowPlayingMovies;
