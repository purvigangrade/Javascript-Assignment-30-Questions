//21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ['India','China','USA','Australia','Argentina'];

for (let i=0; i<=countries.length; i++){
    if (countries[i] == 'Ethiopia'){
        console.log('ETHIOPIA');
    }
    else{
        countries.push('ETHIOPIA');
        break;
    }
}

console.log(countries);

