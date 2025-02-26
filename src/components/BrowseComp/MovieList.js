import React from 'react';
import MovieCard from './MovieCard';
import { TITLE_MAP } from '../../utils/constant';

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        {TITLE_MAP[title] || 'LETS GO'}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
