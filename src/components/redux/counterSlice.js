import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";


const initialState = {
    general:
    {
        date: "04/06/11",
        type: "breakfast",
        money: "-100"
    },
    currentTime:
    {
        year: "",
        day: ""
    }
};

const counterSlice = createSlice({
    name: 'moneydetail',
    initialState,
    reducers: {
        setgeneral: (state, action) => {
            state.general = action.payload;
        },
    },
});


export const selectGeneral = (state) => state.moneydetail.general;

export const selectcurrentTime = (state) => state.moneydetail.currentTime;

export const { setgeneral } = counterSlice.actions;

export default counterSlice.reducer;