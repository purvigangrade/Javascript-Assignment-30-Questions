//Ques18. Write a program which tells the number of days in a month, now consider leap year.

//A year is called as leap year, when
// either it is divided by 4 but not by 100
// or it is divided by 400

function getDays(year, month){
    return new Date(year,month,0).getDate();
}

let now = getDays(2024, 2);
console.log(now);