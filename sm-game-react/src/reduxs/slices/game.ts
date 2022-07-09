import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PlayerType from "../../types/PlayerType";

export interface GameState {
    players: PlayerType[];
};
const initialState: GameState = {
    players: []
}

const gameSlide = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        fetchPlayer: (state, action:PayloadAction<GameState>) => {
            state.players = action.payload.players;
        }
    },
});

const gameReducer = gameSlide.reducer;

export const { fetchPlayer } = gameSlide.actions;

export default gameReducer;
