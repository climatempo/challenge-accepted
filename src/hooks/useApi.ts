import axios from "axios";
import { useEffect, useState } from "react";
import { IWeather } from "../types/Weather";

const api = axios.create({
    baseURL: "http://localhost:3333"
});


export const useApi = () => ({
    getLocales: <T = unknown>(url: string) => {
        const [locales, setLocales] = useState<T | null>(null);

        useEffect(() => {
            api.get(url)
            .then(res => setLocales(res.data));
        }, []);
        
        return { locales };
    },
    getWeather: async (url: string, id: number) => {
        let response = await api.get(url);
        
        let data: IWeather[] = response.data;
        for(let i in data) {
            if(data[i].locale.id === id){
                return data[i];
            }
        }
    }
});