export const DateParser = (date: string): string => {
  const parsedDate = new Date(date);
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const month = months[parsedDate.getMonth()];
  const day = parsedDate.getUTCDate();
  const year = parsedDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const HourParser = (date: string): string => {
  const parsedDate = new Date(date);
  const hour = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();

  return `${hour}:${minutes} hrs`;
};
