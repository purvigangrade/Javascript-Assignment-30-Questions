let inputmonth = prompt('Enter Month:')

// let month1 = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ]
month = inputmonth.toLowerCase();
function season(x){
    if(x === 'september' || x === 'october' || x === 'november'){
        console.log('Autumn Season!!')
    }
    else if(x === 'december' || x === 'january' || x === 'february'){
        console.log('Winter Season!!')
    }
    else if(x === 'march' || x === 'april' || x === 'may'){
        console.log('Spring Season!!')
    }
    else if(x === 'june' || x === 'july' || x === 'august'){
        console.log('Summer Season!!')
    }
}

season(month);