import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies[0];
  const { originalTitle, overview, id } = mainMovie;
  console.log(id);

  return (
    <div>
      <VideoTitle title={originalTitle} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
