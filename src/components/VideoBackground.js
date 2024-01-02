import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../custom hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//     "id": 848326,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Training Day with Zack Snyder and Sofia Boutella",
//         "key": "HhfrYWxHCJw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-12-23T22:00:00.000Z",
//         "id": "658a9757e039f1574cbdced2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Rebel Moon Cast Competes in Speed-Wrapping Presents",
//         "key": "eh8M1gTGRWI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-12-23T18:00:00.000Z",
//         "id": "658a972e4da3d463a1435f39"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Sci-Fi ASMR with the Cast of Rebel Moon",
//         "key": "d68E2eYb0F4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-12-23T17:00:00.000Z",
//         "id": "658a9819688cd057eb85bc46"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Zack Snyder's On-Set Diary",
//         "key": "DfO2MCV7KZo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-12-20T01:00:00.000Z",
//         "id": "6583a943f1759c408710c30e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Sofia Boutella's Fight Training for Rebel Moon",
//         "key": "d9SnnkiO9r0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-12-19T22:00:00.000Z",
//         "id": "6583abdb083547446f3ee76d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Rebel Moon Cast Destroys Strength Test Machines",
//         "key": "ptH4u2-oMDI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-12-19T18:00:00.000Z",
//         "id": "6583a9ddf1759c3fd910fe12"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "How the Guys of Rebel Moon Got Ripped",
//         "key": "UEkPx2kJniE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-12-17T22:00:00.000Z",
//         "id": "658181ad0e64af0839a90b69"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Zack Snyder Breaks Down the Trailer",
//         "key": "jCPke0EIt-c",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-11-13T01:00:00.000Z",
//         "id": "6557a52dea84c71096de46cc"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "fhr3MzT6exg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-11-12T21:25:00.000Z",
//         "id": "655146100816c700abba6517"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Teaser Trailer",
//         "key": "_rHLOXbFZtI",   youtube key
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-08-22T18:24:37.000Z",
//         "id": "64e4fdd4e894a6011ef67f24"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Behind the Scenes",
//         "key": "7nc4TDtogcs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-06-17T22:19:01.000Z",
//         "id": "648e4c15c2ff3d00ad01f5f1"
//       }
//     ]
//   }
