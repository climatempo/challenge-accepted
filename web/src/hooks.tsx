import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useServerAddress: () => string = () => process.env.REACT_APP_SERVER_HOST
    || (process.env.PUBLIC_URL || 'http://localhost') + ':' + (process.env.REACT_APP_SERVER_PORT || '80');