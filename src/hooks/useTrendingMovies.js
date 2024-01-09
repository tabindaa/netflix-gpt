import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { options } from "../helper/Constant";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    const trendingMovies = await result.json();
    dispatch(addTrendingMovies(trendingMovies.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);

};

export default useTrendingMovies;
