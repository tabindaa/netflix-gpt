import { TMDB_IMAGE_URL } from "../helper/Constant";

const MovieCard = ({ posterPath, movieId, onMovieClick }) => {
  const handleMovieCardClick = () => {
    onMovieClick(movieId);
  };
  return (
    <div
      className="w-36 md:w-48 pr-4 text-white hover:scale-125 transition duration-500"
      onClick={handleMovieCardClick}
    >
      <img src={TMDB_IMAGE_URL + posterPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
