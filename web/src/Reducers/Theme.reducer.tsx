import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
    value: string
}

const initialState = {
    value: (localStorage.getItem('theme') === 'dark'
        ? 'dark'
        : (localStorage.getItem('theme') === 'light'
            ? 'light'
            : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        )
    )
} as ThemeState;

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: state => {
            state.value = state.value === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.value);
        },
        setTheme: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
            localStorage.setItem('theme', action.payload);
        }
    }
});

export const { switchTheme, setTheme } = theme.actions;
export default theme.reducer;