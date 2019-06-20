export interface Weather {
    date: string;
    text: string;
    temperature: {
        min: number;
        max: number;
    };
    rain: {
        probability: number;
        precipitation: number; // alguns dados estão como string no .json
    };
}
