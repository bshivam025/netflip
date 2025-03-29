import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './BrowseComp/MainContainer'
import SecondaryContainer from './BrowseComp/SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div className='-ml-6'>
      <div className = ''>
        <Header/>
        <div className=''>
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