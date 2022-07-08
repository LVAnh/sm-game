import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from '../../types/user';

const initState: User = {
  id: "",
  name: "",
  wallet: "",
};

const smSlide = createSlice({
  name: "authenticate",
  initialState: initState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.wallet = action.payload.wallet;
    }
  },
});

const authReducer = smSlide.reducer;

export const { login } = smSlide.actions;

export default authReducer;
