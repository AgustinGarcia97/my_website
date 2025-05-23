import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    open : false,
    skill: {},

}

export const dialogSlice = createSlice({
    initialState,
    name:"dialogSlice",
    reducers:{
        openSkillDialog(state,action){
            state.open = !state.open;
            state.skill = action.payload;
        }
    }
})

export const {
    openSkillDialog,
} = dialogSlice.actions;