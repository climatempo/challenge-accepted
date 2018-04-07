import axios from 'axios';
import { createAction } from "redux-actions";
import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from "./types.js";

const host = 'http://localhost:3001/api/weathers/';


export const searchWeather = locale => {
    return function (dispatch) {
        dispatch({
            type: SEARCH,
            payload: true
        });

        axios.get(host + locale).then(response => {
            console.log(response.data);
            dispatch({
                type: SEARCH_SUCCESS,
                payload: response.data
            });
        })
            .catch(err => {
                dispatch({
                    type: SEARCH_ERROR,
                    payload: err
                });
            })
    }
}