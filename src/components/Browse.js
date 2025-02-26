import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './BrowseComp/MainContainer'
import SecondaryContainer from './BrowseComp/SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <div className = ''>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
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