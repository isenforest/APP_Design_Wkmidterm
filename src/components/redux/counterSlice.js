import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const timelimit = moment().format('LT');

const initialState = {
    general:
    {
        date: "04/06/11",
        type: "breakfast",
        money: "-100"
    },
    colorMode: "light",

};

const counterSlice = createSlice({
    name: 'moneydetail',
    initialState,
    reducers: {
        setgeneral: (state, action) => {
            state.general = action.payload;
        },
        toggleColorMode: (state) => {
            state.colorMode = state.colorMode === "light" ? "dark" : "light";
        }
    },
});


export const selectGeneral = (state) => state.moneydetail.general;
export const selectcurrentTime = (state) => state.moneydetail.currentTime;
export const selectColorMode = (state) => state.moneydetail.colorMode;


export const { setgeneral, toggleColorMode } = counterSlice.actions;

export default counterSlice.reducer;