export function reformatDateString(date: string) {
  const year = date.substring(6, 10);
  const month = date.substring(3, 5);
  const day = date.substring(0, 2);
  return year + '-' + day + '-' + month;
}

export const getDay = (day: number) => {
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  return days[day];
};
