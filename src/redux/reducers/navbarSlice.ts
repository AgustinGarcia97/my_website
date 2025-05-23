import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
}

export const drawerState = createSlice(
    {
        name:"drawerOpenClose",
        initialState,
        reducers:{
            setOpenDrawer: (state) => {
                state.open = true;
            },
            setCloseDrawer: (state) => {
                state.open = false;
            }
        }
    }
);
export const {
    setOpenDrawer,
    setCloseDrawer
} = drawerState.actions;

