



// const getDays = (year, month) => {
//     return new Date(year, month, 0).getDate();
// };

// console.log(getDays(2023,2));

function getDays(year, month){
    return new Date(year,month,0).getDate();
}

let now = getDays(2023, 2);
console.log(now);