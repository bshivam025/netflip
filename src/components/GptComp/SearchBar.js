import React from 'react';
import { SEARCH_ICON_IMAGE } from '../../utils/constant';
import useLanguageFinger from '../../hooks/useLanguageFinger';
import { LANG_TEXT } from '../../utils/langConst';

const SearchBar = () => {
  let language = useLanguageFinger().image;
  console.log(LANG_TEXT[language].searchBarText);
  return (
    <div className="flex justify-center p-[10%]">
      <form className="w-full max-w-lg flex">
        <input
          type="text"
          placeholder={LANG_TEXT[language].searchBarText}
          className="w-full h-10 px-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-md"
        />
        <button className="h-10 w-10 flex items-center justify-center bg-gray-700 rounded-lg ml-2">
          <img
            alt="Search"
            src={SEARCH_ICON_IMAGE}
            className="w-9 h-9"
          />
        </button>
      </form>

    </div>
  );
};

export default SearchBar;
