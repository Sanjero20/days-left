import './style.css';

enum Months {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

// Get current date
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

// Get the total days per each month of the remaining
let remainingDays = 0;
for (let i = month; i <= 11; i++) {
  const daysPerMonth = new Date(year, i, 0).getDate();
  remainingDays += daysPerMonth;
}

remainingDays = remainingDays - day;

// Display to screen
const h1 = document.getElementById('remaining') as HTMLElement;
const h2 = document.getElementById('date') as HTMLElement;

h1.textContent = `There are ${remainingDays} days remaining`;
h2.textContent = `as of ${Months[month]} ${day}, ${year}`;
