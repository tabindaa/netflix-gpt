import { useEffect } from "react";
import { options } from "../helper/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const popularMovies = await result.json();
    console.log(popularMovies.results);
    dispatch(addPopularMovies(popularMovies.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
