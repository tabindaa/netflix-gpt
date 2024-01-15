import { TMDB_IMAGE_URL } from "../helper/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 text-white">
      <img src={TMDB_IMAGE_URL + posterPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
