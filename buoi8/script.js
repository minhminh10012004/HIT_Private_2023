var a = 'Đỗ Thị Minh';
// alert(a);
console.log(a);
const b = 1;
console.log( typeof b);
const s = 'Hi every\'one';
console.log(s.length);
const slice = s.slice(-10,-5);
console.log(slice);
const substring = s.substring(2);
console.log(substring);
const substr = s.substr(2);
console.log(substr);
console.log(s.replaceAll('H','h')
.replaceAll('e','E'));
console.log(s.replaceAll(/[a-zA-z]/g,'A'));
// const d= '123minh';
// console.log();
console.log(s.concat(' 123456','44444'));
console.log(s.padStart(20,'a'));
const giay = 5;
console.log((giay+' ').padStart(2,'0'));
const string = ' 1 2 3 4 5 6'
console.log(string.split(','));