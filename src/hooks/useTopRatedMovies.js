import React from 'react'
import {  TMDB_APIS } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/slices/movieSlice'

const useTopRatedMovies = (movieId) => {
    let dispatch = useDispatch();
    useEffect(() => {
      if(movieId){
        dispatch(addTopRatedMovies({ movie: null }));
        return;
      }
        const getMovies = async () => {
          try {
            const res = await fetch(
              TMDB_APIS.get_top_rated_movies
            );
            let data = await res.json();
            data = data.data;
            const movies = data.results;
            dispatch(addTopRatedMovies({ movie: movies }));
          } catch (error) {
            console.error("Error fetching movies: ", error);
          }
        };
    
        getMovies();
      }, [movieId]);
}

export default useTopRatedMovies