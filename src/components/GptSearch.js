import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { netflix_bg_logo } from "../helper/Constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={netflix_bg_logo}
          alt="logo"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
