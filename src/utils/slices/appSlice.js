import { createSlice } from "@reduxjs/toolkit";

let appSlice = createSlice({
    name: 'appConfig',
    initialState: {
        prefferedLanguage: 'en'
    },
    reducers: {
        changePrefferedLanguage: (state, action) => {
            state.prefferedLanguage = action.payload.language;
        }
    }

});

export const {changePrefferedLanguage} = appSlice.actions;
export default appSlice.reducer;