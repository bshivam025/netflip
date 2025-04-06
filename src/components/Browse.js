import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './BrowseComp/MainContainer'
import SecondaryContainer from './BrowseComp/SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useSimilarMovies from '../hooks/useSimilarMovies'
import { useParams } from 'react-router-dom'

const Browse = () => {
  let { movieId } = useParams();
  movieId = movieId ? movieId : null;
  console.log(movieId, " is the movie id selected");
  console.error("vercel bhai dikha de logs please");
  usePopularMovies(movieId);
  useTopRatedMovies(movieId);
  useNowPlayingMovies(movieId);
  useSimilarMovies(movieId);
  return (
    <div>
      <div className = ''>
        <Header/>
        <div className='bg-black min-h-screen'>
          <MainContainer/>
          <SecondaryContainer/>
        </div>
      </div>
    </div>
  )
}

export default Browse


// Browse layout
/*
  1. Main container:
   - Video Background
   - Video Title(details)
  2. Secondary container
   - Movie list * n
   - cards * n
*/