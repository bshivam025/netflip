import React from 'react'
import { TMDB_IMG_CDN } from '../../utils/constant';

const MovieCard = ({movie}) => {
  return (
    <div className="w-32 sm:w-40 md:w-48 pr-2 sm:pr-4">
      {movie.poster_path && (
        <img
          alt={movie.title}
          src={TMDB_IMG_CDN.replace("{IMG_HASH}", movie.poster_path)}
          className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
      )}
    </div>
  );
  
}

export default MovieCard