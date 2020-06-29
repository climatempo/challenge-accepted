import { ActionTypes } from '../types';

const initialState = {
  datas: [],
  search: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DATAS: {
      return {
        ...state,
        datas: action.payload,
      };
    }
    case ActionTypes.SEARCH_WEATHER: {
      return {
        ...state,
        search: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
