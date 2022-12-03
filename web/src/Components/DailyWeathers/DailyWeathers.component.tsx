import { useAppSelector, useServerAddress } from '../../hooks';
import { useEffect, useState } from 'react';
import { CircularProgress, Divider, Typography } from '@mui/material';
import SubInfo from '../SubInfo';
import { useSnackbar } from 'notistack';
// @ts-ignore
import { WiThermometer, WiSunset, WiStrongWind, WiSunrise, WiWindDeg, WiRaindrop, WiRaindrops, WiUmbrella, WiThermometerExterior } from 'weather-icons-react';

type DailyWeather = {
    idcity: number,
    moon: string[],
    rainbow: string,
    description: string,
    date: string,
    temperature: {
        min: number,
        max: number
    },
    rain: {
        precipitation: number,
        probability: number
    },
    wind: {
        compass: string,
        velocity: number
    },
    humidity: {
        min: number,
        max: number
    },
    sun: {
        morning: string,
        afternoon: string
    }
}

function DailyWeathers() {
    const locale = useAppSelector(state => state.locale.value);
    const tempUnity = useAppSelector(state => state.temperature.value);
    const rainUnity = useAppSelector(state => state.precipitation.value);
    const [weathers, setWeathers] = useState<DailyWeather[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { enqueueSnackbar: notify } = useSnackbar();
    const server = useServerAddress();

    useEffect(() => {
        if(!locale)
            return;
        setLoading(true);
        fetch(`${ server }/city/${ locale.idcity }/weathers`)
            .then(response => {
                setLoading(false);
                if(response.status === 404) {
                    notify('Não temos o clima dessa cidade.', { variant: 'info'});
                    return [];
                }else return response.json();
            })
            .then(weathers => setWeathers(weathers))
            .catch(err => {
                console.error(err);
                setLoading(false);
                notify('Alguma coisa deu errado.', { variant: 'error'});
            });
    }, [locale, notify, server]);

    function renderDate(weather: DailyWeather) {
        const date = weather.date.split('-');

        return <div className="flex gap-1 items-baseline mt-[-1rem] flex-shrink-0">
            <Typography variant="h1">
                { date[2] }
            </Typography>
            <Typography variant="h5" className="flex-shrink-0">
                { '/ '+date[1] }
            </Typography>
        </div>;
    }

    function renderDailyWeatherCard(weather: DailyWeather, key: number) {
        const {
            description,
            temperature: { min: tmin, max: tmax },
            rain: { precipitation, probability },
            humidity: { min: hmin, max: hmax },
            wind: { compass, velocity },
            rainbow,
            moon,
            sun: { morning, afternoon }
        } = weather;
        const moons = moon.map(moon => moon.split(' - '));

        return <div  key={key}>
            <Divider variant="fullWidth" />
            <div className="flex gap-8 my-20">
            <div className="hidden lg:block">
                { renderDate(weather) }
            </div>
            <div className="flex flex-col items-baseline w-full">
                <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
                    <div className="block lg:hidden">
                        { renderDate(weather) }
                    </div>
                    <div>
                        <Typography variant="h6">
                            { description }
                        </Typography>
                        <div className="flex flex-col lg:flex-row lg:gap-8 mb-4">
                            <Typography variant="overline">{ rainbow } de arco-íris</Typography>
                            <Typography variant="overline">
                                { moon.length === 1 ? 'Lua '+moon[0] : `Lua ${moons[0][0]} até ${moons[0][1]} e ${moons[1][0]} após ${moons[1][1]}`}
                            </Typography>

                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-start gap-6 sm:gap-0 sm:justify-between w-full">
                    <SubInfo bottomIcon={<WiThermometerExterior size={28} className="mr-2"/>}
                             bottomValue={tempUnity === 'c' ? tmin : ((tmin * 1.8) + 32).toFixed(0)}
                             bottomCaption={<div className="mt-[-2.5rem]">{tempUnity === 'c' ? '°C' : '°F'}</div>}
                             topIcon={<WiThermometer size={28} className="mr-2"/>}
                             topValue={tempUnity === 'c' ? tmax : ((tmax * 1.8) + 32).toFixed(0)}
                             topCaption={<div className="mt-[-2.5rem]">{tempUnity === 'c' ? '°C' : '°F'}</div>}
                             caption="Temperatura"/>
                    <SubInfo bottomIcon={<WiRaindrops size={28} className="mr-2"/>}
                             bottomValue={rainUnity === 'mm' ? precipitation : (precipitation / 25.4).toFixed(1)}
                             bottomCaption={rainUnity === 'mm' ? 'mm' : 'inch'}
                             topIcon={<WiUmbrella size={28} className="mr-2"/>}
                             topValue={probability}
                             topCaption={<div className="mt-[-2.5rem]">%</div>}
                             caption="Chuva"/>
                    <SubInfo bottomIcon={<WiRaindrops size={28} className="mr-2"/>}
                             bottomValue={hmin}
                             bottomCaption={<div className="mt-[-2.5rem]">%</div>}
                             topIcon={<WiRaindrop size={28} className="mr-2"/>}
                             topValue={hmax}
                             topCaption={<div className="mt-[-2.5rem]">%</div>}
                             caption="Humidade"/>
                    <SubInfo bottomIcon={<WiWindDeg size={28} className="mr-2"/>}
                             bottomValue={compass}
                             topIcon={<WiStrongWind size={28} className="mr-2"/>}
                             topValue={tempUnity === 'c' ? velocity : (velocity/1.609).toFixed(0)}
                             topCaption={tempUnity === 'c' ? 'km/h' : 'mph'}
                             caption="Vento"/>
                    <SubInfo bottomIcon={<WiSunrise size={28} className="mr-2"/>}
                             bottomValue={morning}
                             topIcon={<WiSunset size={28} className="mr-2"/>}
                             topValue={afternoon}
                             caption="Sol"/>
                </div>
            </div>
        </div></div>;
    }

    function renderSkeleton() {
        return loading ? <CircularProgress className="mx-auto" /> : <></>
    }
    
    return <div className="mt-24 flex flex-col">
        { weathers.length && !loading ? weathers.map(renderDailyWeatherCard) : renderSkeleton() }
    </div>;
}

export default DailyWeathers;