import getDateArray from "./date.js";
import { getCalendarData } from "./utils.js";
function createCalendar(elem, year, month) {
  const dateArray = getDateArray(year, month - 1);
  const { daysInMonth } = getCalendarData(year, month - 1);

  dateArray.forEach((el) => {
    if (!el) return;
    const row = document.createElement("tr");
    const rowInnerHTML = el
      .map((cell) => {
        let textContent = " ";
        if (cell >= 1 && cell <= daysInMonth) textContent = cell;
        return `<td>${textContent}</td>`;
      })
      .join("");
    row.innerHTML = rowInnerHTML;
    elem.appendChild(row);
  });
}

const tableBody = document.querySelector("tbody");

createCalendar(tableBody, 2012, 9);
