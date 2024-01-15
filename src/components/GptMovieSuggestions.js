import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const searchResult = useSelector((store) => store.gpt.searchedMovies);
  if (!searchResult) return;

  return (
    <div className="p-4 bg-black bg-opacity-90">
      <MovieList title={"Search Results"} movies={searchResult} />
    </div>
  );
};

export default GptMovieSuggestions;
