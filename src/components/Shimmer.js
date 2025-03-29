import React from 'react'

const Shimmer = () => {
  return (
    <div className="w-32 sm:w-40 md:w-48 pr-2 sm:pr-4">
      <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-700 rounded-lg shadow-md animate-pulse"></div>
    </div>
  );
}

export default Shimmer