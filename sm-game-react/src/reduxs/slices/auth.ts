import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from '../../types/user';

const initState: User = {
  id: "",
  name: "",
  wallet: "",
};

const authSlice = createSlice({
  name: "authenticate",
  initialState: initState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.wallet = action.payload.wallet;
    }
  },
});

const authReducer = authSlice.reducer;

export const { login } = authSlice.actions;

export default authReducer;
