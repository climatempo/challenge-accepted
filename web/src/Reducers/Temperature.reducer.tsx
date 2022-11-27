import { createSlice } from '@reduxjs/toolkit';

type TemperatureState = {
    value: string
}

const initialState = {
    value: 'c'
} as TemperatureState;

const temperature = createSlice({
    name: 'temperature',
    initialState,
    reducers: {
        switchTemperature: state => {
            state.value = state.value === 'c' ? 'f' : 'c';
            // state.convert = state.value === 'c' ? (from) => (from * 1.8) + 32 : (from) => from;
        },
        setFahrenheit: state => {
            state.value = 'f';
            // state.convert = (from) => (from * 1.8) + 32;
        },
        setCelsius: state => {
            state.value = 'c';
            // state.convert = (from) => from;
        }
    }
});

export const { switchTemperature, setFahrenheit, setCelsius } = temperature.actions;
export default temperature.reducer;