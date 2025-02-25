import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/slices/userSlice';
import { NETFLIX_HEADER, DEFAULT_AVATAR } from "../utils/constant";
function Header() {
  const userData = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profilePic = userData?.image || DEFAULT_AVATAR;
    
  let navigate = useNavigate();
  let dispatch = useDispatch();

  // Close dropdown when clicking outside
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;
        dispatch(addUser({uid:uid, email:email, name: name, image: image}))
        navigate("/browse")
      } else {
          dispatch(removeUser())
          navigate("/");
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

  function handleSignOut(){
    signOut(auth)
  }

  function openProfile(){
    navigate("/profile")
  }

  return (
    <header className="absolute w-full bg-gradient-to-b from-black z-10">
      <div className="w-full px-1 py-2 flex items-center justify-between">
        {/* Netflix Logo on the left */}
        <div>
          <img
            className="w-40 cursor-pointer"
            src={NETFLIX_HEADER}
            alt="Netflix Logo"
            onClick={()=>navigate("/browse")}
          />
        </div>
        {/* Profile Icon on the right */}
        {userData.uid && 
            <div className="relative right-5" ref={dropdownRef}>
            <img
                className="w-14 h-14 rounded-full cursor-pointer object-cover"
                src={profilePic}
                alt="Profile"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded shadow-lg text-white transition-all duration-300 ease-in-out">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer"  onClick={(e) => { e.stopPropagation(); openProfile();}}>
                        Profile
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                        Settings
                        </li>
                        <li className="px-4 py-2 hover:bg-red-700 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleSignOut();}}>
                        Sign Out
                        </li>
                    </ul>
                </div>
            )}
            </div>
        }
      </div>
    </header>
  );
}

export default Header;
