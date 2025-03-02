import React from 'react'
import SearchBar from './GptComp/SearchBar'
import MovieSuggestions from './GptComp/MovieSuggestions'
import Header from './Header'

const GptMovies = () => {
  return (
    <div className='bg-black min-h-screen'>
        <Header/>
        <SearchBar/>
        <MovieSuggestions/>
    </div>
  )
}

export default GptMovies