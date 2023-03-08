// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//     // - Sort the array and find the min and max age
// let minimum = Math.min(...ages);
// console.log('Minimum number:', minimum);

// let maximum = Math.max(...ages);
// console.log('Maximum number:', maximum);

//     - Find the median age(one middle item or two middle items divided by two)
//Sort the array
// ages.sort((a,b) => a-b);
// console.log(ages);

// if (ages.length%2 != 0){
//     //ODD length
//     let midindex = Math.floor(ages.length/2);
//     median = ages[midindex];
// }
// else{
//     let midindex =  Math.floor(ages.length/2);
//     median = (ages[midindex] + ages[midindex - 1])/2;
// }

// console.log(median);

// - Find the average age(all items divided by number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// let sum = 0;
// for (let i=0; i<ages.length; i++ ){

//     sum = sum + ages[i];
// }

// let average = Math.ceil(sum/ages.length);
// console.log(average);

// - Find the range of the ages(max minus min)
// let range = Math.floor(Math.random() * (26 - 19 + 1)) + 19;
// console.log(range);

//     - Compare the value of (min - average) and (max - average), use abs() method

let min = Math.abs(...ages);
console.log(min);

let max = Math.max(Math.abs(...ages));
console.log(max);