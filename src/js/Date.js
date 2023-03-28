import * as dayjs from 'dayjs';
import "dayjs/locale/ru";


const dayJSObj = dayjs();
console.log(dayJSObj.locale("ru").format("dddd/MMMM/YYYY H:m:s A"));

const date = new Date();

console.log(date);


const date0 = new Date(0);

console.log(date0);


console.log(date.getFullYear());
console.log(date.getHours);
console.log(date.getDate);
console.log(date.getUTCFullYear);

const nextMeet = new Date ("March 25 2023 13:00:00");
console.log('nextMeet :>> ', nextMeet);

console.log(date.getUTCDate);
