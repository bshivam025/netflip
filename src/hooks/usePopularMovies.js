import React from 'react'
import { API_OPTIONS_TMDB, TMDB_APIS } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/slices/movieSlice'

const usePopularMovies = (movieId) => {
    let dispatch = useDispatch();
    useEffect(() => {
      if(movieId) {
        dispatch(addPopularMovies({ movie: null }));
        return;
      }
        const getMovies = async () => {
          try {
            const res = await fetch(
              TMDB_APIS.get_popular_movies
            );
            let data = await res.json();
            data = data.data;
            const movies = data.results;
            dispatch(addPopularMovies({ movie: movies }));
          } catch (error) {
            console.error("Error fetching movies: ", error);
          }
        };
    
        getMovies();
      }, [movieId]);
}

export default usePopularMovies