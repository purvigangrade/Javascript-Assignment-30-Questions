// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
let isprime = true;
for (i = 2; i <= 100; i++) {
  for (let j = 2; j <= i-1; j++) {

    if (i % j == 0) {
      isprime = false;
      break;
    }
  }
  if(isprime){
    console.log(i);
  }
isprime = true;
}
