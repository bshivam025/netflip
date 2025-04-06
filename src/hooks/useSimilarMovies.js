import { useDispatch } from "react-redux"
import { API_OPTIONS_TMDB, TMDB_APIS } from "../utils/constant"
import { addSimilarMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";

const useSimilarMovies = (movieId) => {
    let dispatch = useDispatch();
    useEffect(() => {
        if (!movieId) {
            dispatch(addSimilarMovies({ movie: null }));
            return;
        }
        const getMovies = async () => {
            try {
                const res = await fetch(
                    TMDB_APIS.get_similar_movies.replace("{MOVIE_ID}", movieId),
                    API_OPTIONS_TMDB
                );
                const data = await res.json();
                const movies = data.results;
                dispatch(addSimilarMovies({ movie: movies }));
            } catch (error) {
                console.error("Error fetching movies: ", error);
            }
        };
        getMovies();
    }, [movieId])
}

export default useSimilarMovies;