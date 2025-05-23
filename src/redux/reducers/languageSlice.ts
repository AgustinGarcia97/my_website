import {createSlice, type PayloadAction} from "@reduxjs/toolkit"
import type { Language } from "../../data/WebSiteData";

interface LanguageState {
    switchTo: Language;
}

const initialState: LanguageState = {
    switchTo: 'en',
}

export const languageSlice = createSlice( {
        name:"languageSlice",
        initialState,
        reducers:{
            switchLanguage(state, action: PayloadAction<Language> ){
                state.switchTo = action.payload
            }
        },
    })

export const {
    switchLanguage
} = languageSlice.actions;

