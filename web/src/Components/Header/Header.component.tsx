import { switchTheme } from '../../Reducers/Theme.reducer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Moon, Sun } from '@icon-park/react';
import { switchTemperature } from '../../Reducers/Temperature.reducer';
import { switchPrecipitation } from '../../Reducers/Precipitation.reducer';
import SearchBar from '../SearchBar';
import Button from '../Button';

function Header() {
    const theme = useAppSelector(state => state.theme.value);
    const temperature = useAppSelector(state => state.temperature.value);
    const precipitation = useAppSelector(state => state.precipitation.value);
    const dispatch = useAppDispatch();

    function renderSchemaSwitch() {
        return <Button onClick={() => dispatch(switchTheme())}
                       title={ theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro' }>
            { theme === 'light'
                ? <Moon size="28" strokeWidth={2} />
                : <Sun size="28" strokeWidth={2} />}
        </Button>
    }

    function renderTemperatureSwitch() {
        return <Button onClick={() => dispatch(switchTemperature())}
                       title={ temperature === 'c' ? 'Mostrar temperatura em celcius' : 'Mostrar temperatura em fahrenheit' }>
            { temperature === 'f' ? <p><sup>o</sup>F</p> : <p><sup>o</sup>C</p>}
        </Button>
    }

    function renderPrecipitationSwitch() {
        return <Button onClick={() => dispatch(switchPrecipitation())}
                       title={ precipitation === 'inch' ? 'Mostrar precipitação em inch' : 'Mostrar precipitação em mm' }>
            { precipitation === 'mm' ? <p>mm</p> : <p>inch</p>}
        </Button>
    }

    function renderButtons() {
        return <div className="flex gap-8 sm:gap-3 lg:gap-6">
            { renderSchemaSwitch() }
            { renderTemperatureSwitch() }
            { renderPrecipitationSwitch() }
        </div>;
    }

    return <div className="relative left-0 right-0 px-6 flex flex-col gap-8 items-center">
        <div className="rounded-lg relative w-full left-0 right-0 py-6 top-8 transition-all mx-auto max-w-[1024px] gap-8 flex items-center">
            <div className="absolute w-full h-full blur"/>
            <SearchBar/>
            <div className="hidden sm:block">
                { renderButtons() }
            </div>
        </div>
        <div className="block sm:hidden">
            { renderButtons() }
        </div>
    </div>;
}

export default Header;