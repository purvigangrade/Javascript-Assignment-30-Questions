//24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
let odd = [];
let even = [];
 for(let i=0; i<=number.length; i++){
    if(number[i]%2 === 0){
        even.push(number[i]);
    }
    else{
        odd.push(number[i]);
    }
 }

 console.log(even);
 console.log(odd);