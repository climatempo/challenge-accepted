import { switchTheme } from '../../Reducers/Theme.reducer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Moon, Sun } from '@icon-park/react';
import { switchTemperature } from '../../Reducers/Temperature.reducer';
import { switchPrecipitation } from '../../Reducers/Precipitation.reducer';

function Header() {
    const theme = useAppSelector(state => state.theme.value);
    const temperature = useAppSelector(state => state.temperature.value);
    const precipitation = useAppSelector(state => state.precipitation.value);
    const dispatch = useAppDispatch();

    function renderSchemaSwitch() {
        return <button className="bg-white/50 p-4 rounded-full" onClick={() => dispatch(switchTheme())}>
            { theme == 'light'
                ? <Moon />
                : <Sun />}
        </button>
    }

    function renderTemperatureSwitch() {
        return <button className="bg-white/50 p-4 rounded-full font-bold" onClick={() => dispatch(switchTemperature())}>
            { temperature == 'f' ? <p><sup>o</sup>F</p> : <p><sup>o</sup>C</p>}
        </button>
    }

    function renderPrecipitationSwitch() {
        return <button className="bg-white/50 p-4 rounded-full font-bold" onClick={() => dispatch(switchPrecipitation())}>
            { precipitation == 'mm' ? <p>mm</p> : <p>inch</p>}
        </button>
    }

    return <div className="Header text-white dark:bg-blue dark:text-black">
        <h1 className="text-8 font-extrabold">Clima Tempo<span> Challenge</span></h1>
        <div className="HeaderButtons">
            { renderSchemaSwitch() }
            { renderTemperatureSwitch() }
            { renderPrecipitationSwitch() }
        </div>
    </div>;
}

export default Header;