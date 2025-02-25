import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {},
    reducers:
    {
        addNowPlayingMovies: (state, action)=>{
            console.log(action.payload.movie);
            state.nowPlayingMovies = action.payload.movie;
        }
    }
})

export const {addNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;