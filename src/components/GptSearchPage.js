import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggessions from "./GptMovieSuggessions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="logo" />
      </div>
      <div className="" >
        <GptSearchBar />
        <GptMovieSuggessions />
      </div>
    </>
  );
};

export default GptSearchPage;
