import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        gptSearchedMovies: null,
        gptSearchedMovieNames: null
    },
    reducers:
    {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload.movie;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload.movie;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload.movie;
        },
        addGptMovies: (state, action) => {
            const {movieResult, movieNames} = action.payload;
            state.gptSearchedMovieNames = movieNames;
            state.gptSearchedMovies = movieResult
;        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addGptMovies} = movieSlice.actions;
export default movieSlice.reducer;