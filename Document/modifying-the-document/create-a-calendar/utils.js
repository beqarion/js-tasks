export function getCalendarData(year, month) {
  const date = new Date(year, month);
  const daysInMonth = new Date(new Date(year, month + 1, 1) - 1).getDate();
  date.setDate(1);
  const weekDayOfFirstDate = date.getDay();
  return { daysInMonth, weekDayOfFirstDate };
}

export function chunkArray(array, chunkSize) {
  if (chunkSize <= 0) return [];
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
