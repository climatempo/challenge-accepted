import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DetailedLocale = {
    idlocale: number,
    idcity: number,
    capital: boolean,
    idcountry: number,
    ac: string,
    country: string,
    uf: string,
    city: string,
    region: string,
    seaside: boolean,
    latitude: number,
    longitude: number,
    tourist: boolean,
    agricultural: boolean,
    base: string,
    searchPoints: number
}

type DailyWeatherState = {
    value: DetailedLocale | null
}

const initialState = {
    value: null
} as DailyWeatherState;

const locale = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<DetailedLocale>) => {
            state.value = action.payload;
        }
    }
});

export const { setLocale } = locale.actions;
export default locale.reducer;