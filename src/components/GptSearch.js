import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { netflix_bg_logo } from "../helper/Constant";

const GptSearch = () => {
  return (
    <div className="w-screen">
      <div className="fixed -z-10">
        <img src={netflix_bg_logo} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
