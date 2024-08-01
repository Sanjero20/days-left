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

// Calculate difference between today and before the year ends

// Display to screen
const h1 = document.getElementById('days') as HTMLElement;
h1.textContent = `${Months[month]} ${day}, ${year}`;
