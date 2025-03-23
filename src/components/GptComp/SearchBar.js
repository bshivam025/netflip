import React, { useRef } from 'react';
import { SEARCH_ICON_IMAGE, TMDB_APIS, API_OPTIONS_TMDB } from '../../utils/constant';
import useLanguageFinger from '../../hooks/useLanguageFinger';
import { LANG_TEXT } from '../../utils/langConst';
import openai from '../../utils/openai';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../../utils/slices/movieSlice';

const SearchBar = () => {
  let language = useLanguageFinger().image;
  const searchText = useRef(null);
  let dispatch = useDispatch();

  async function searchMovieByName(name){

    let searchMovieApi = TMDB_APIS.get_search_result;
    const fetchMovie = await fetch(
      searchMovieApi + name,
      API_OPTIONS_TMDB
    );
    const dataMovie = await fetchMovie.json();
    return dataMovie;
  }

  async function searchGpt(){
    let text = searchText.current.value;
    const gptQuery = "Act as a Movie Recommendation system and suggest 5 movies for the query " + text + ". only give me names of the 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, koi mil gaya, titanic";

    let completion = await openai.chat.completions.create({
      messages: [
        {"role": "user", "content": gptQuery},
      ],
      model: "gpt-4o-mini-2024-07-18"
    });
    let result = completion.choices[0]?.message?.content || "No response";
    let movieArr = result.split(", ");
    let searchedMovies = movieArr.map( (movie) => searchMovieByName(movie));
    let searchMovieData = await Promise.all(searchedMovies);
    dispatch(addGptMovies({movieResult: searchMovieData, movieNames: movieArr }))
  }
  return (
    <div className="flex justify-center p-[10%]">
      <form className="w-full max-w-lg flex" onSubmit={(e)=> e.preventDefault() } >
        <input
          type="text"
          ref={searchText}
          placeholder={LANG_TEXT[language].searchBarText}
          className="w-full h-10 px-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-md"
        />
        <button className="h-10 w-10 flex items-center justify-center bg-gray-700 rounded-lg ml-2">
          <img
            alt="Search"
            src={SEARCH_ICON_IMAGE}
            className="w-9 h-9"
            onClick={()=> searchGpt() }
          />
        </button>
      </form>

    </div>
  );
};

export default SearchBar;
