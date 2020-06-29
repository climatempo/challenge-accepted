import { ActionTypes } from '../types';
import axios from 'axios';

const API = 'http://localhost:3001';

const dispatchLoading = (loading = false) => ({
  type: ActionTypes.LOADING,
  payload: { loading },
});

const dispatchError = (error = new Error('Ocorreu um erro inesperado')) => ({
  type: ActionTypes.ERROR,
  payload: { error },
});

export const getDatas = () => {
  return async (dispatch) => {
    dispatch(dispatchLoading(true));

    try {
      const { data } = await axios.get(`${API}/weather`);

      dispatch(dispatchLoading(false));
      dispatch({
        type: ActionTypes.GET_DATAS,
        payload: data,
      });
    } catch (error) {
      console.error(error);

      dispatch(dispatchLoading(false));
      dispatch(dispatchError(error));
    }
  };
};

export const searchWeather = (value) => {
  return async (dispatch) => {
    dispatch(dispatchLoading(true));

    try {
      const { data } = await axios.get(`${API}/weather/?locale.name=${value}`);

      dispatch(dispatchLoading(false));
      dispatch({
        type: ActionTypes.SEARCH_WEATHER,
        payload: data,
      });
    } catch (error) {
      console.error(error);

      dispatch(dispatchLoading(false));
      dispatch(dispatchError(error));
    }
  };
};
