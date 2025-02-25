import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  image: null,
  email: null,
  uid: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    removeUser: (state) => {
      return initialState;
    },
    updateUserProfile: (state, action) => {
        state.name = action.payload.name;
        state.image = action.payload.image;
    }
  }
});

export const { addUser, removeUser, updateUserProfile } = userSlice.actions;

export default userSlice.reducer;
