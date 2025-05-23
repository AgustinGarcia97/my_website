import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definimos los idiomas posibles
type Language = 'en' | 'es' | 'pt';

// Definimos el tipo para el estado
interface LanguageState {
    switchTo: Language;
}

// Estado inicial
const initialState: LanguageState = {
    switchTo: 'en'
};

// Creamos el slice
export const languageSlice = createSlice({
    name: 'languageSelector',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.switchTo = action.payload;
        }
    }
});

// Exportamos las acciones
export const { setLanguage } = languageSlice.actions;

// Exportamos el reducer
export default languageSlice.reducer; 