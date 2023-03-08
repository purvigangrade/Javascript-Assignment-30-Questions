// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

// // 	a. Print a triangle pattern
// let num = 3;
// let string1 ='';
// for(let i = 1; i <= num; i++){
//   for (let j = 1; j <= i; j++){
//           string1 = string1 + "*";
//   }
//   string1 = string1 + '\n';
// }

// console.log(string1);
//--------------------------------------------------------------------
// 	b. Print a square pattern,

// let n = 3;

// let string = "";

// for(let i = 0; i < n; i++) { 
//   for(let j = 0; j < n; j++) { 
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//-------------------------------------------------
//// 	c. Print a pyramid pattern, 

let n = 3;
let string = '';
for (let i=1; i <= n; i++){
    for(let j=1; j<=n-i;j++){
        string += ' ';
    }
for(let k=1; k<=2*i-1; k++){
    string += "*"; 
}   
string += '\n'
}
console.log(string);