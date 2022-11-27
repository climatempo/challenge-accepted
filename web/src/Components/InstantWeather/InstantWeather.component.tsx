import { useAppSelector } from '../../hooks';
import { ReactNode, useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

type InstantWeather = {
    idlocale: number,
    temperature: number,
    icon: string,
    condition: string,
    humidity: number,
    sensation: number,
    windVelocity: number,
    pressure: number,
    date: string
}

function InstantWeather() {
    const locale = useAppSelector(state => state.locale.value);
    const tempUnity = useAppSelector(state => state.temperature.value);
    const [weather, setWeather] = useState<InstantWeather>();
    const [loading, setLoading] = useState<boolean>(true);
    const { enqueueSnackbar: notify } = useSnackbar();
    let fetchBlock = false;

    useEffect(() => {
        if(!locale)
            return;
        setLoading(true);
        fetch(`http://localhost/city/${ locale.idlocale }/now`)
            .then(response => {
                setLoading(false);
                if(response.status === 404) {
                    notify('Não temos o clima dessa cidade.', { variant: 'info' });
                    return undefined;
                }else return response.json();
            })
            .then(weather => setWeather(weather))
            .catch(err => {
                fetchBlock = true;
                setLoading(false);
                console.error(err);
                notify('Alguma coisa deu errado.', { variant: 'error'});
                setTimeout(() => fetchBlock = false, 2000);
            });
    }, [locale]);

    function renderSubInfo(caption: string, info: string|number, unity: ReactNode) {
        return <div className="text-center sm:text-left">
            <div className="hidden sm:flex">
                <Typography variant='h4' className="w-fit">
                    { info }
                </Typography>
                <Typography variant='subtitle1' className="self-end w-fit">
                    { unity }
                </Typography>
            </div>
            <div className="flex sm:hidden">
                <Typography variant='h5' className="w-fit">
                    { info }
                </Typography>
                <Typography variant='subtitle1'>
                    { unity }
                </Typography>
            </div>
            <Typography variant='caption'>
                { caption }
            </Typography>
        </div>;
    }

    function renderContent(weather: InstantWeather) {
        const { temperature, windVelocity, pressure, sensation, humidity, condition } = weather;
        return <>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-x-4">
                <Typography variant='h1'>
                    { tempUnity === 'c' ? temperature + '°C' : ((temperature * 1.8) + 32).toFixed(0) + '°F' }
                </Typography>
                <Typography variant='h4' className="lg:hidden pb-3">
                    { condition }
                </Typography>
            </div>
            <div className="flex flex-col gap-3 w-full">
                <Typography variant='h6' className="hidden lg:block">
                    { condition }
                </Typography>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-[400px] w-full sm:max-w-full mx-auto">
                    { renderSubInfo('Sensação', tempUnity === 'c'
                        ? sensation
                        : ((sensation * 1.8) + 32).toFixed(0), tempUnity === 'c' ?
                        <div className="mt-[-2.5rem]">°C</div>
                        : <div className="mt-[-2.5rem]">°F'</div>) }
                    { renderSubInfo('Humidade', humidity, <div className="mt-[-2.5rem]">%</div>)}
                    { renderSubInfo('Vento', tempUnity === 'c'
                        ? windVelocity
                        : (windVelocity/1.609).toFixed(0), tempUnity === 'c'
                        ? <div className="">km/h</div>
                        : <div className="">mph</div>) }
                    { renderSubInfo('Pressão', pressure, <div className="">hPa</div>) }
                </div>
            </div>
        </>;
    }

    function renderSkeleton() {
        return loading ? <CircularProgress className="mx-auto" /> : <></>
    }

    return <div className="flex gap-10 items-center max-w-[720px] mx-auto flex-col lg:flex-row">
        { weather && !loading ? renderContent(weather) : renderSkeleton() }
    </div>;
}

export default InstantWeather;