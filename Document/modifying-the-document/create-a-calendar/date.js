import { getCalendarData, chunkArray } from "./utils.js";

export default function getDateArray(year, month) {
  let { daysInMonth, weekDayOfFirstDate } = getCalendarData(year, month);
  let startIndex = weekDayOfFirstDate - 1;
  const monthArray = Array.from({ length: daysInMonth }, (_, i) => 1 + i);
  const padLeft = Array.from(
    { length: startIndex },
    (_, i) => -(startIndex - 1) + i
  );
  const numberOfCells = Math.ceil([...padLeft, ...monthArray].length / 7) * 7;
  const dateArray = Array.from(
    { length: numberOfCells },
    (_, i) => -(startIndex - 1) + i
  );
  return chunkArray(dateArray, 7);
}
