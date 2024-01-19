import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const userSelectedMovie = useSelector(
    (store) => store.movies?.userSelectedMovie
  );
  console.log(userSelectedMovie);
  const { title, original_name, overview, id } = userSelectedMovie;
  return (
    <div>
      <VideoTitle title={title || original_name} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MovieDetails;
