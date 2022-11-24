import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
    value: string
}

const initialState = {
    value: 'light'
} as ThemeState;

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: state => {
            state.value = state.value == 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { switchTheme, setTheme } = theme.actions;
export default theme.reducer;