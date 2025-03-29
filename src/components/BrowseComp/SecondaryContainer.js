import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const selector = useSelector((store) => store.movies);
  if(!selector || selector.length == 0 || selector == {}) return;
  return (
    <div className = 'bg-black  text-white'>
      <div className='md:-mt-30 lg:-mt-52 pl-0 lg:pl-5 relative'>
      {
        Object.entries(selector)?.map((object) =>{
          let title = object[0];
          let movies = object[1];
          
          return title.includes('gpt') ? null : <MovieList key={title} title={title} movies = {movies}/>
        })
      }
      </div>
    </div>
  )
}

export default SecondaryContainer