//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let filename = prompt("Enter filename");

let extension  = filename.split('.').pop();

console.log(extension);