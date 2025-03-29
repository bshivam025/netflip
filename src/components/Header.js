import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/slices/userSlice';
import { changePrefferedLanguage } from "../utils/slices/appSlice";
import { NETFLIX_HEADER, DEFAULT_AVATAR } from "../utils/constant";
import {LANGUAGE_MAP} from "../utils/langConst";
import useAuthentication from "../hooks/useAuthentication";
import useRouting from "../hooks/useRouting";

function Header() {
  const userData = useSelector((state) => state.user);
  const prefferedLanguage = useSelector((state) => state.app?.prefferedLanguage);
  console.log("pref : " + prefferedLanguage);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profilePic = userData?.image || DEFAULT_AVATAR;
  let dispatch = useDispatch();
  let {handleSignOut} = useAuthentication();
  let {openProfile, goToHome, goToBrowse, goToGpt, currentLocation} = useRouting();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;
        dispatch(addUser({uid:uid, email:email, name: name, image: image}))
        if(currentLocation == "/") goToBrowse("/browse")
      } else {
          dispatch(removeUser())
          goToHome("/");
      }
    });

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      unsubscribe();
    }

  }, []);

  const dropdownRef = useRef(null);
  const languageRef = useRef(prefferedLanguage);

  function hangleLanguageChange() {
    dispatch(changePrefferedLanguage({language: languageRef.current.value}))
  }


  return (
    <header className="absolute w-full bg-gradient-to-b from-black z-10">
      <div className="w-full px-4 py-2 flex items-center justify-between">
        {/* Netflix Logo on the left */}
        <div>
          <img
            className="w-28 sm:w-32 md:w-40 cursor-pointer"
            src={NETFLIX_HEADER}
            alt="Netflix Logo"
            onClick={() => goToBrowse()}
          />
        </div>
  
        {userData.uid && (
          <div className="flex items-center space-x-2 sm:space-x-4">
            {currentLocation == "/gptMovies" && (
              <select
                ref={languageRef}
                onChange={hangleLanguageChange}
                defaultValue={dropdownRef}
                className="text-sm sm:text-base px-2 py-1 rounded-md bg-gray-800 text-white"
              >
                {LANGUAGE_MAP.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
  
            {/* GPT ICON */}
            <div className="text-white bg-purple-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md hover:bg-purple-800 transition duration-300">
              <button className="font-semibold text-sm sm:text-lg tracking-wide" onClick={() => goToGpt()}>
                GPT
              </button>
            </div>
  
            {/* Profile Icon on the right */}
            <div className="relative" ref={dropdownRef}>
              <img
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full cursor-pointer object-cover"
                src={profilePic}
                alt="Profile"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
  
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-black bg-opacity-90 rounded shadow-lg text-white transition-all duration-300 ease-in-out">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={openProfile}>
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                    <li className="px-4 py-2 hover:bg-red-700 cursor-pointer" onClick={handleSignOut}>
                      Sign Out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );  
}

export default Header;
