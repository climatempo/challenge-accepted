

class Weather {
  id!: string;
  
  period!: {
    begin: Date,
    end: Date
  };
  
  locale_id!: string;

  weather!: [
    {
      date: Date,
      text: string,
      temperature: {
        min: number,
        max: number
      },
      rain: {
        probability: number,
        precipitation: number
      },
    }
  ];
}