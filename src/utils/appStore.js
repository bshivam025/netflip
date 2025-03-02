import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import appReducer from "./slices/appSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: movieReducer,
            app: appReducer
        }
    }
)

export default appStore;