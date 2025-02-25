import React from 'react'
import { API_OPTIONS_TMDB } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies} from '../utils/slices/movieSlice'

const useNowPlayingMovies = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        const getMovies = async () => {
          try {
            const res = await fetch(
              'https://api.themoviedb.org/3/movie/now_playing?page=1',
              API_OPTIONS_TMDB
            );
            const data = await res.json();
            const movies = data.results;
            console.log(movies);
            dispatch(addNowPlayingMovies({ movie: movies }));
          } catch (error) {
            console.error("Error fetching movies: ", error);
          }
        };
    
        getMovies();
      }, []);
}

export default useNowPlayingMovies