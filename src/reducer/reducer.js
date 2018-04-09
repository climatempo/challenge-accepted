import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from "../actions/types.js";

const INITIAL_STATE = {
    weathers: [],
    locale: null,
    error: false,
    loading: null
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH:
        return {
          ...state,
          loading: action.payload
        }
      case SEARCH_SUCCESS:
        return {
          ...state,
          weathers: action.payload
        }
      case SEARCH_ERROR:
        return {
          ...state,
          weathers: action.payload,
          error: true
        }
      default:
        return state
    }
  }