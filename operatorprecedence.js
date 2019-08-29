//Operator precedencer
var now  = 2019;
var yearAman = 1995;
var fullAge = 18;
//multiple oprators
var isFullAge = now - yearAman >= fullAge;
console.log(isFullAge)
//Grouping
var ageAman= now - yearAman;
var ageAmmu =35;
var average  =  (ageAman + ageAmmu) / 2;
console.log(average)
//Multiple assignment

var x,y;

x = y = (3 + 5) * 4 - 6; 
console.log(x,y);

//More operators
//x = x * 2;
x *= 2;
console.log(x);

x += 10;
console.log(x);
x++;
console.log(x);