import React from 'react'
import { API_OPTIONS_TMDB, TMDB_APIS } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/slices/movieSlice'

const usePopularMovies = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        const getMovies = async () => {
          try {
            const res = await fetch(
              TMDB_APIS.get_popular_movies,
              API_OPTIONS_TMDB
            );
            const data = await res.json();
            const movies = data.results;
            dispatch(addPopularMovies({ movie: movies }));
          } catch (error) {
            console.error("Error fetching movies: ", error);
          }
        };
    
        getMovies();
      }, []);
}

export default usePopularMovies