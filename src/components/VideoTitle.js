import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-lg rounded-md hover:bg-opacity-80">
          <div className="flex">
            <FaPlay className="mt-[5px] mr-[5px]" />
            Play
          </div>
        </button>

        <button className="mx-2 bg-gray-500 text-white p-2 px-8 text-lg bg-opacity-50 rounded-md">
          <div className="flex">
            <FaInfoCircle className="mt-[5px] mr-[5px]" />
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
