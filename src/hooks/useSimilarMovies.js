import { useDispatch } from "react-redux"
import {  TMDB_APIS } from "../utils/constant"
import { addSimilarMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";

const useSimilarMovies = (movieId) => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(addSimilarMovies({ movie: null }));
        const getMovies = async () => {
            try {
                const res = await fetch(TMDB_APIS.get_similar_movies+movieId);
                const data = await res.json();
                const movies = data.data.results;
                dispatch(addSimilarMovies({ movie: movies }));
            } catch (error) {
                console.error("Error fetching movies: ", error);
            }
        };

        if(movieId) {
            getMovies();
        }
    }, [movieId])
}

export default useSimilarMovies;