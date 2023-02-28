//Q7. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let platforms = ['ineuron', 'pw skills', 'w3shools','pw skills', 'javatpoint','pw skills'];

let firstoccurence = platforms.lastIndexOf('pw skills',0);
console.log(firstoccurence);

let lastoccurence = platforms.lastIndexOf('pw skills');
console.log(lastoccurence);