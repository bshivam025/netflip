import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Profile';
import GptMovies from './GptMovies';
const Body = () => {
    let appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse/:movieId",
            element: <Browse/>
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path:"/profile",
            element: <Profile/>
        },
        {
            path: "/gptmovies",
            element: <GptMovies/>
        }
    ])
  return (
    <div className='no-scrollbar'>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body