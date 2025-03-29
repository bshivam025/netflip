import React, { useState } from 'react'
import SearchBar from './GptComp/SearchBar'
import MovieSuggestions from './GptComp/MovieSuggestions'
import Header from './Header'

const GptMovies = () => {
  let [shimmer, setShimmer] = useState(false);
  return (
    <div className='bg-black min-h-screen'>
        <Header/>
        <SearchBar setShimmer = {setShimmer} />
        <MovieSuggestions shimmer = {shimmer} />
    </div>
  )
}

export default GptMovies