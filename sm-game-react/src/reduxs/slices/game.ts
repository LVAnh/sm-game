import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PlayerType from "../../types/PlayerType";
import GameType from "../../types/GameType";

export interface GameState {
    players: PlayerType[];
    games: GameType[];
    rollStatus: number;
    inning: number;
};
const initialState: GameState = {
    players: [],
    games: [],
    rollStatus: 0,
    inning:1
}

const gameSlide = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        getInning: (state, action:PayloadAction<number>) => {
            state.inning = action.payload;
        },
        fetchPlayer: (state, action:PayloadAction<PlayerType[]>) => {
            state.players = action.payload;
        },
        fetchGame: (state, action:PayloadAction<GameType[]>) => {
            state.games = action.payload;
        },
        setIsRolling: (state, action:PayloadAction<number>) => {
            state.rollStatus = action.payload;
        }
    },
});

const gameReducer = gameSlide.reducer;

export const { fetchPlayer, fetchGame,setIsRolling, getInning } = gameSlide.actions;

export default gameReducer;
