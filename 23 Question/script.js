//23. Write a program to check that the number given by the user is a prime number or not.

let number = prompt('Enter a number');

if (number == 1){
    console.log(`${number} is neither prime nor cmposite`)
}
else if(number<1){
    console.log(`${number} is negative`);
}
else{
    let isprime;
    for(let i=2; i<number; i++){
        if (number%i === 0){
            isprime = false;
            break;
        }
        else{
            isprime = true;
        }
    }
    if (isprime == false){
        console.log(`${number} is not a prime number`);
    }
    else{
        console.log(`${number} is a prime number`);
    }
    
}