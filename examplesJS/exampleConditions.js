/* Example If else conditions */

let num=15;
if(num > 10){
    console.log('Number greater than 10');
}else{
    console.log('Number no greater than 10');
}



/* Example Switch conditions */
let isdayOfWeek = 'Sunday';

switch (isdayOfWeek) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Day of the Week');
        break;

    case 'Saturday':
    case 'Sunday':
        console.log('Day of the Weekend');
        break;

    default:
        break;
}