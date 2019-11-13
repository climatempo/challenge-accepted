// Mocks the API class
export default class Api {

    // Get locale
    static async locale(){

        // Generate fake functiosn
        return await new Promise(resolve => {
            resolve([
                {"id":1,"name":"MOCK1","uf":"MK1"}, 
                {"id":2,"name":"MOCK2","uf":"MK2"}
            ]);
        });
    }
    
    // Get Weather
    static async weather(){

        // Generate fake functiosn
        return await new Promise(resolve => {
            resolve([
                {
                    "id": 1,
                    "description": "MOCK DESC 1",
                    "weather_date": "01\/01\/2001",
                    "temperature_max": "01",
                    "temperature_min": "01",
                    "rain_probability": "01",
                    "rain_precipitation": "01"
                },
                {
                    "id": 2,
                    "description": "MOCK DESC 2",
                    "weather_date": "02\/02\/2002",
                    "temperature_max": "02",
                    "temperature_min": "02",
                    "rain_probability": "02",
                    "rain_precipitation": "02"
                },
            ]);
        });
    }
}