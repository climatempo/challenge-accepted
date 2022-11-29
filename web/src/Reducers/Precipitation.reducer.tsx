import { createSlice } from '@reduxjs/toolkit';

type PrecipitationState = {
    value: string
}

const initialState = {
    value: localStorage.getItem('precipitation') === 'inch' ? 'inch' : 'mm'
} as PrecipitationState;

const precipitation = createSlice({
    name: 'precipitation',
    initialState,
    reducers: {
        switchPrecipitation: state => {
            state.value = state.value === 'mm' ? 'inch' : 'mm';
            localStorage.setItem('precipitation', state.value);
        },
        setInch: state => {
            state.value = 'inch';
            localStorage.setItem('precipitation', 'inch');
        },
        setMM: state => {
            state.value = 'mm';
            localStorage.setItem('precipitation', 'mm');
        }
    }
});

export const { switchPrecipitation, setInch, setMM } = precipitation.actions;
export default precipitation.reducer;