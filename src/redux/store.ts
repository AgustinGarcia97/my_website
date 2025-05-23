import {drawerState} from "./reducers/navbarSlice.ts";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {languageSlice} from "./reducers/languageSlice.ts";
import type {Language} from './reducers/languageSlice';
import {dialogSlice} from "./reducers/drawerSlice.ts";

export type RootState = {
    languageSelector: {
        switchTo: Language;
    };
    drawer: {
        open: boolean;
    };
    dialog:{
        open: boolean;
        skill:object,
    }
};

const rootReducer = combineReducers({
    drawer: drawerState.reducer,
    languageSelector: languageSlice.reducer,
    dialog: dialogSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer
});

export {store};