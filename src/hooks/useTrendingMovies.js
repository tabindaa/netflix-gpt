import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { options } from "../helper/Constant";

const useTrendingMovies = () => {
  const trendingMovies = useSelector(
    (store) => store.movies.trendingMovies
  );
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
    !trendingMovies && getTrendingMovies();
  }, []);

};

export default useTrendingMovies;
