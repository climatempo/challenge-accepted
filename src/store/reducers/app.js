import { ActionTypes } from '../types';

const initialState = {
  loading: false,
  error: undefined,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
