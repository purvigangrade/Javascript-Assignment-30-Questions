// Use the Date object to do the following activities
//     - What is the year today?

// const now = new Date();
// console.log(now.getFullYear());

//     - What is the month today as a number?

// const now = new Date();
// console.log(now.getMonth()+1);

// Note
// JavaScript counts months from 0 to 11: January = 0. and December = 11.

//     - What is the date today?

// const now = new Date();
// console.log(now.getDate());

//     - What is the day today as a number?

// const now = new Date();
// console.log(now.getDay());

//     - What is the hours now?

// const now = new Date();
// console.log(now.getHours());

//     - What is the minutes now?

// const now = new Date();
// console.log(now.getMinutes());

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const before = new Date("1970-01-01");
const now = new Date();

console.log(now-before);