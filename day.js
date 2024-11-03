// let date = new Date();
// let daynumber = date.getDay();
// let TheDayIs;
// let quote;
// switch(daynumber){
//     case 0:
//         TheDayIs  = 'sanday';
//         quote = 'Time to chilix';
//         break;
//     case 1:
//         TheDayIs  = 'monday';
//         quote = 'the day of work';
//         break;
//     case 2:
//         TheDayIs = 'thusday';
//         quote = 'thuesday is a day of second of work';
//         break;
//     case 3:
//         TheDayIs = 'wensday';
//         quote = 'day of holiday';
//         break;
//     case 4:
//         TheDayIs = 'thursday';
//         quote = 'day of swiminng';
//         break;
//     case 5:
//         TheDayIs = 'friday';
//         quote = 'day of hanging';
//         break;
//     case 6:
//         TheDayIs = 'suterday';
//         quote= 'day of loving';
//         break;
// }

// const spanweekday = document.getElementById('weekday');
// console.log(spanweekday);

// spanweekday.innerHTML = `${TheDayIs}`
// const spanquote = document.getElementById('quote');
// spanquote.innerHTML = `${quote}`
let date = new Date();
let numberdays = date.getDay();
let dayis;
let quote;
switch(numberdays){
    case 0:
        dayis = 'Sanday';
        quote = 'Sanday is for Reading';
        break;
    case 1:
        dayis = 'Monday';
        quote  = 'Monday is for football';
        break;
    case 2:
        dayis = 'Thuesday';
        quote = 'Thuesday is for Working';
        break;
    case 3:
        dayis = 'Wensday';
        quote = 'Wensday is for second Working';
        break;
    case 4:
        dayis = 'Thursday';
        quote = 'Thurday is for having fun with friends';
        break;
    case 5:
        dayis = 'Friday';
        quote = 'Friday is off from any orgainization';
        break;
    case 6:
        dayis = 'Saterday';
        quote = 'Suterday is the day of holiday';
        break;
}

const spanweekday = document.getElementById('weekday');
const spanquote = document.getElementById('quote');
spanweekday.innerHTML = `${dayis}`
spanquote.innerHTML = `${quote}`





