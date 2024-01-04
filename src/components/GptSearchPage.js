import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggessions from "./GptMovieSuggessions";
import {BG_URL} from '../utils/constants';


const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggessions />
    </div>
  );
};

export default GptSearchPage;
