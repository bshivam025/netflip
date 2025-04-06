import React from 'react'
import { API_OPTIONS_TMDB, TMDB_APIS } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies} from '../utils/slices/movieSlice'

const useNowPlayingMovies = (movieId) => {
    let dispatch = useDispatch();
    useEffect(() => {
      dispatch(addNowPlayingMovies({ movie: null }));

        const getMovies = async () => {
          try {
            let api = TMDB_APIS.get_now_playing_movies;
            if (movieId) {
              api = TMDB_APIS.get_movie_by_id + movieId + "?";
            }
            const res = await fetch(
              api,
              API_OPTIONS_TMDB
            );
            const data = await res.json();

            let movies = [];
            if(movieId){
              movies.push(data);
            }else{
               movies = data.results;
            }

            dispatch(addNowPlayingMovies({ movie: movies }));
            window.scrollTo({ top: 0, behavior: "auto" }); // 👈 Scroll to top when movieId changes

          } catch (error) {
            console.error("Error fetching movies: ", error);
          }
        };
    
        getMovies();
      }, [movieId]);
}

export default useNowPlayingMovies