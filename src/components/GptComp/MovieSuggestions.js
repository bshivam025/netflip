import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../BrowseComp/MovieList';

const MovieSuggestions = () => {
  let selector = useSelector((store)=>store.movies);
  let {gptSearchedMovieNames, gptSearchedMovies} = selector;
  if(!gptSearchedMovieNames || gptSearchedMovieNames.length == 0) return null;
  return (
    <div>
      {gptSearchedMovieNames.map((movie, index)=>{
        return <MovieList key={movie} title={movie} movies = {gptSearchedMovies[index]?.results} />
      })}
    </div>
  )
}

export default MovieSuggestions