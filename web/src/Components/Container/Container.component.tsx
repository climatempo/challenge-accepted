import { useAppSelector } from '../../hooks';
import Empty from '../Empty';
import InstantWeather from '../InstantWeather';
import DailyWeathers from '../DailyWeathers';

function Container() {
    const locale = useAppSelector(state => state.locale.value);

    function renderContainer() {
        return <>
            <InstantWeather/>
            <DailyWeathers/>
        </>
    }

    function renderEmpty() {
        return <Empty/>
    }

    return <div className="mt-8 sm:mt-16 py-6 px-8 relative transition-all mx-auto max-w-[1024px] w-full gap-16">
        { locale ? renderContainer() : renderEmpty() }
    </div>;
}

export default Container;