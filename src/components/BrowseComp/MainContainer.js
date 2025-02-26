import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const selector = useSelector((state) => state.movies?.nowPlayingMovies);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (selector && selector.length > 0) {
      let randomMoviePick = Math.floor(Math.random() * selector.length);
      setMainMovie(selector[randomMoviePick]); // Ensures both video and title update together
    }
  }, [selector]);

  if (!mainMovie) return null; // Wait until movie is set

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
  
};

export default MainContainer;
