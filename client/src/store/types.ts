interface LocaleInterface {
	id: number;
	name: string;
	state: string;
	latitude: number;
	longitude: number;
}

interface PeriodInterface {
	begin: Date;
	end: Date;
}

interface WeatherInterface {
	date: string;
	text: string;
	temperature: {
		min: number;
		max: number;
	};
	rain: {
		probability: number;
		precipitation: number;
	}
}

interface WeatherDetailsInterface {
	period: PeriodInterface;
	locale: LocaleInterface;
	weather: WeatherInterface[];
}

interface SettingsInterface {
	temperature: string;
	rain: string;
}

type LocaleState = {
	locales: LocaleInterface[];
	weatherDetails: WeatherDetailsInterface | null;
}

type SettingsState = {
	temperature: string,
	rain: string,
}

type LocaleAction = {
	type: string;
	locales: LocaleInterface[];
	weatherDetails: WeatherDetailsInterface | null;
}

type SettingsAction = {
	type: string,
	temperature: string;
	rain: string;
}

export type {
	LocaleInterface,
	WeatherInterface,
	PeriodInterface,
	SettingsInterface,
	WeatherDetailsInterface,
	LocaleState,
	SettingsState,
	LocaleAction,
	SettingsAction
};