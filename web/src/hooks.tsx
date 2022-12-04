import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type ServerAddress = {
  server: string,
  search: (name: string) => string,
  locale: (idlocale: number) => string,
  instant: (idlocale: number) => string,
  weather: (idcode: number) => string,
  weathers: (idcode: number) => string
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useServerAddress: () => ServerAddress = () => {
  const server = process.env.REACT_APP_WORKER_HOST || process.env.REACT_APP_SERVER_HOST || (process.env.PUBLIC_URL || 'http://localhost') + ':' + (process.env.REACT_APP_SERVER_PORT || '80');

  return {
    server,
    search: (name: string) => process.env.REACT_APP_WORKER_HOST
      ? `${ server }/?search=${ name }`
      : `${ server }/search/${ name }`,
    locale: (idlocale: number) => process.env.REACT_APP_WORKER_HOST
      ? `${ server }/?locale=${ idlocale }`
      : `${ server }/city/${ idlocale }`,
    instant: (idlocale: number) => process.env.REACT_APP_WORKER_HOST
      ? `${ server }/?instant=${ idlocale }`
      : `${ server }/city/${ idlocale }/now`,
    weather: (idcode: number) => process.env.REACT_APP_WORKER_HOST
      ? `${ server }/?weather=${ idcode }`
      : `${ server }/city/${ idcode }/weather`,
    weathers: (idcode: number) => process.env.REACT_APP_WORKER_HOST
      ? `${ server }/?weathers=${ idcode }`
      : `${ server }/city/${ idcode }/weathers`,
  };
};