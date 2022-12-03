export const dateFormatter = (date: string) =>
   new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   }).format(new Date(date));
