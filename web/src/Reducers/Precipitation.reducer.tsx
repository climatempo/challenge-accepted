import { createSlice } from '@reduxjs/toolkit';

type PrecipitationState = {
    value: string
    convert: (from: number) => number
}

const initialState = {
    value: 'mm',
    convert: (value) => value
} as PrecipitationState;

const precipitation = createSlice({
    name: 'precipitation',
    initialState,
    reducers: {
        switchPrecipitation: state => {
            state.value = state.value == 'mm' ? 'inch' : 'mm';
            state.convert = state.value == 'mm' ? (value) => value / 25.4 : (value) => value;
        },
        setInch: state => {
            state.value = 'inch';
            state.convert = (value) => value / 25.4;
        },
        setMM: state => {
            state.value = 'mm';
            state.convert = (value) => value;
        }
    }
});

export const { switchPrecipitation, setInch, setMM } = precipitation.actions;
export default precipitation.reducer;