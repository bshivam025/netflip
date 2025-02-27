import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const selector = useSelector((store) => store.movies);
  if(!selector || selector.length == 0 || selector == {}) return;
  return (
    <div className = 'bg-black  text-white'>
      <div className='-mt-52 pl-5 relative'>
      {
        Object.entries(selector)?.map((object) =>{
          let title = object[0];
          let movies = object[1];
          
          return <MovieList key={title} title={title} movies = {movies}/>
        })
      }
      </div>
    </div>
  )
}

export default SecondaryContainer