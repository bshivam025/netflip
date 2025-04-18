import React from 'react';
import MovieCard from './MovieCard';
import { TITLE_MAP } from '../../utils/constant';

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        {movies?.length &&  (TITLE_MAP[title] || title)}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            movie.poster_path ? <MovieCard key={movie.id} movie={movie} /> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
