/**Arrays */



var names = ['Aman','Vivke','Ankit'];
var years = new Array(1990,1693,1945);
//how to access element in the array

console.log(names)
console.log(names.length);
//reassign value or mutate array data

names[2] = 'Pratik';

console.log(names)
//index assign 

names[5] = 'Ankit';
console.log(names)


names[names.length] = 'Ammy';
console.log(names)




// Different Data Type in array
 var aman = ['Aman','Shukla',1993,'Programmer',false];

 aman.push('blue');
 console.log(aman)
//unshift is used to add element at the beginning of the array
 aman.unshift('Mr.');
 console.log(aman)


 //remove the element from array at last postion
 aman.pop()
 console.log(aman);

 aman.shift();
 console.log(aman)

 //indexof return the postion of the argument that we passed in the array
 console.log(aman.indexOf(1993));


 //ternary operator in array

 var isDesigner = aman.indexOf('Programmer') === -1 ?  'Aman is NOT a designer' : 'Aman is Programmer';
 console.log(isDesigner);