import React from 'react'
import { TMDB_IMG_CDN } from '../../utils/constant';

const MovieCard = ({movie}) => {
    console.log(movie);
  return (
    <div className='w-48 pr-4'>
        {
            <img
             alt={movie.title} 
             src = {TMDB_IMG_CDN.replace('{IMG_HASH}', movie.poster_path)} 
            />
        }
    </div>
  )
}

export default MovieCard