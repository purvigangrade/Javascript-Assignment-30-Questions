// let marks = 65;

// if(marks <= 100 && marks >=80 ){
//     console.log('Grade A');
// }
// else if(marks <= 89 && marks >=70){
//     console.log('Grade B');
// }
// else if(marks <= 69 && marks >=60){
//     console.log('Grade C');
// }
// else if(marks <= 59 && marks >=50){
//     console.log('Grade D');
// }
// else if(marks >= 0 && marks <= 49){
//     console.log('Grade F');
// }

let marks = [22,35,65,45,55,78,86,99,97];

for(let i=0; i <= marks.length; i++){

if(marks[i] <= 100 && marks[i] >=80 ){
    console.log('Grade A');
}
else if(marks[i] <= 89 && marks[i] >=70){
    console.log('Grade B');
}
else if(marks[i] <= 69 && marks[i] >=60){
    console.log('Grade C');
}
else if(marks[i] <= 59 && marks[i] >=50){
    console.log('Grade D');
}
else if(marks[i] >= 0 && marks[i] <= 49){
    console.log('Grade F');
}
}