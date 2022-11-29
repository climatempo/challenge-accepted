import { createSlice } from '@reduxjs/toolkit';

type TemperatureState = {
    value: string
}

const initialState = {
    value: localStorage.getItem('temperature') === 'f' ? 'f' : 'c'
} as TemperatureState;

const temperature = createSlice({
    name: 'temperature',
    initialState,
    reducers: {
        switchTemperature: state => {
            state.value = state.value === 'c' ? 'f' : 'c';
            localStorage.setItem('temperature', state.value);
        },
        setFahrenheit: state => {
            state.value = 'f';
            localStorage.setItem('temperature', 'f');
        },
        setCelsius: state => {
            state.value = 'c';
            localStorage.setItem('temperature', 'c');
        }
    }
});

export const { switchTemperature, setFahrenheit, setCelsius } = temperature.actions;
export default temperature.reducer;