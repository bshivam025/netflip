import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { updateUserProfile } from "../utils/slices/userSlice";


const Profile = () => {
  const userData = useSelector((state) => state.user);
  const profilePic = userData?.image;
  const name = userData?.name;
  console.log("name, profileData ", name, profilePic );
  const [dispName, setDispName] = useState(name);
  const [dispImg, setDispImg] = useState(profilePic);
  const dispatch = useDispatch()

  useEffect(()=>{
    setDispName(userData?.name);
    setDispImg(userData?.image);

  },[userData])

  const handlePicChange = (e) => {
    setDispImg(e.target.value);
  };

  const handleNameChange = (e) => {
    setDispName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
        displayName: dispName, photoURL: dispImg
      }).then(() => {
        dispatch(updateUserProfile({name: dispName, image: dispImg}))
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-semibold mb-6 mt-10">Profile Settings</h1>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full object-cover mb-4"
              src={dispImg}
              alt="Profile"
            />
            <label className="block mb-2">
              Change Profile Picture URL:
              <input
                type="text"
                value={dispImg}
                onChange={handlePicChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </label>
          </div>
          <form onSubmit={handleSubmit} className="mt-6">
            <label className="block mb-4">
              Change Your Name:
              <input
                type="text"
                value={dispName}
                onChange={handleNameChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </label>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
