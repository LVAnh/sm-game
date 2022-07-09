import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Wallet {
    address: string;
}
const initState: Wallet = {
    address: ""
};

const walletSlide = createSlice({
    name: "wallet",
    initialState: initState,
    reducers: {
        connect: (state, action: PayloadAction<Wallet>) => {
            state.address = action.payload.address;
        }
    },
});

const walletReducer = walletSlide.reducer;

export const { connect } = walletSlide.actions;

export default walletReducer;
