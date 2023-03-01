// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// const now = new Date();
// console.log(now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes());

// const now = new Date();
// console.log(now.getDate() + '-' + (now.getMonth()+1) + '-' + now.getFullYear() + ' ' +  now.getHours() + ':' + now.getMinutes());

const now = new Date();
console.log(now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear() + ' ' +  now.getHours() + ':' + now.getMinutes());

