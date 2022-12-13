interface LocaleInterface {
	id: number;
	name: string;
	state: string;
	latitude: number;
	longitude: number;
}

type LocaleState = {
	locales: LocaleInterface[],
}

type LocaleAction = {
	type: string;
	locales: LocaleInterface[];
}

export type { LocaleInterface, LocaleState, LocaleAction };