export default interface Weather {
  period: {
    begin: string;
    end: string;
  };
  locale: {
    id: number;
    name: string;
    state: string;
    latitude: number;
    longitude: number;
  };
  weather: [
    {
      date: string;
      text: string;
      temperature: {
        min: number;
        max: number;
      };
      rain: {
        probability: number;
        precipitation: number;
      };
    },
  ];
}
