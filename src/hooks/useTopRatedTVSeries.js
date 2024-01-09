import React, { useEffect } from "react";
import { options } from "../helper/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedTVSeries } from "../utils/moviesSlice";

const useTopRatedTVSeries = () => {
  const dispatch = useDispatch();
  const getTopRatedTvSeries = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    );
    const topratedTvSeries = await response.json();
    dispatch(addTopRatedTVSeries(topratedTvSeries.results));
  };

  useEffect(() => {
    getTopRatedTvSeries();
  }, []);
};

export default useTopRatedTVSeries;
