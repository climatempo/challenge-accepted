export interface ContainerProps {
  data: {
    date: string;
    text: string;
    temperature: {
      min: number;
      max: number;
    };
    rain: {
      probability: number;
      precipitation: string | number;
    };
  };
}

export interface CardProps {
  date: string;
  text: string;
  temperature: {
    min: number | string;
    max: number | string;
  };
  rain: {
    probability: string;
    precipitation: string | number;
  };
}

export interface StyledProps {
  color?: string;
}
