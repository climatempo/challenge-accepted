interface WeatherInterface {
	date: string;
	text: string;
	temperature: {
		min: number;
		max: number;
	};
	rain: {
		probability: number;
		preciptation: number;
	}
}

export default WeatherInterface;