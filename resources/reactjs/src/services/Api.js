// Axios Lib
import axios from 'axios';

// The API class
export default class Api {

    // API base
    static base = "http://127.0.0.1:8000";

    // Get locale
    static async locale(data){

        // Wait for API
        const response = await axios.get(this.base + '/api/locale/' + btoa(data));

        // Return data
        return response.data;
    }
    
    // Get Weather
    static async weather(localeID){

        // Wait for API
        const response = await axios.get(this.base + '/api/weather/' + localeID);        

        // Return data
        return response.data;
    }
}