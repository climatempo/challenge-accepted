import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Reducers/Theme.reducer';
import temperatureReducer from './Reducers/Temperature.reducer';
import precipitationReducer from './Reducers/Precipitation.reducer';
import localeReducer from './Reducers/Locale.reducer';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        temperature: temperatureReducer,
        precipitation: precipitationReducer,
        locale: localeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;