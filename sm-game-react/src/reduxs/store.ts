import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/game";
import contractReducer from "./slices/smart-contract";
import walletReducer from "./slices/wallet";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    game: gameReducer,
    contract: contractReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
