import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../helper/languageConstants";
import { options } from "../helper/Constant";
import { updateSearchedMovies } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const handleGptSearch = async () => {
    const searchdKeyword = searchRef.current?.value;
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchdKeyword +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const result = await response.json();
    dispatch(updateSearchedMovies(result.results));
  };

  // async function main() {
  //   const gptQuery =
  //     "Act as a movie Recommendation system and suggest some movies for the query" +
  //     searchRef.current.value +
  //     "only give me 5 movie names,comma seperated, like the example result given ahead. Example Result: Golmaal, Welcome, Welcome back";
  //   const chatCompletion = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: searchRef.current.value }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(chatCompletion.choices);
  // }

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="col-span-3 p-2 m-4 bg-red-700 rounded-lg text-white"
          onClick={handleGptSearch}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
