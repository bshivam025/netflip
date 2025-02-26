import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null
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
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;