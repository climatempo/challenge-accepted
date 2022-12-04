export const dateFormatter = (date: string) =>
   new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   }).format(new Date(date));

export const fahrenheitFormatter = (temp: number): string =>
   (temp * 1.8 + 32).toFixed(0);

export const inchFormatter = (volume: number): string =>
   (volume / 25.4).toFixed(2);
