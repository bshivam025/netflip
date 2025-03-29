import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../BrowseComp/MovieList';
import Shimmer from '../Shimmer';

const MovieSuggestions = ({shimmer}) => {

  let selector = useSelector((store)=>store.movies);
  let {gptSearchedMovieNames, gptSearchedMovies} = selector;
  if(shimmer == 1){
    return (
      <div className='flex flex-wrap relative gap-4 justify-center'>
        {[...Array(16)].map((_, i) => <Shimmer key={i} />)}

      </div>
    )
  }
  if(!gptSearchedMovieNames || gptSearchedMovieNames.length == 0) {
      return null;
  } 
  return (
    <div>
      {gptSearchedMovieNames.map((movie, index)=>{
        return <MovieList key={movie} title={movie} movies = {gptSearchedMovies[index]?.results} />
      })}
    </div>
  )
}

export default MovieSuggestions