import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Contract, ethers} from "ethers";
export interface ContractState {

}
const initState: ContractState = {

};

const contractSlide = createSlice({
    name: "contract",
    initialState: initState,
    reducers: {
        connectEthers: (state, action: PayloadAction<ContractState>) => {

        }
    },
});

const contractReducer = contractSlide.reducer;

export const { connectEthers } = contractSlide.actions;

export default contractReducer;
