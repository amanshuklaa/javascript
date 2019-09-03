// console.log('Hello World!!');
var firstName = 'Aman';
var lastName = 'Shukla';
var age = 24;
var fullAge = true;
var job;
console.log(firstName,lastName,age,fullAge,job)
job = 'Teacher';
console.log(job);



//concat 
var fstName = 'Aman';

var ag = 24; 
console.log(fstName + ' ' + ag);

//we can declare multiple variable in same line
//Type coercion
var jobs, isMarried;
jobs ='Programmer';
isMarried = false;

console.log(fstName + 'is a' + ag + ' year old ' + jobs + '. Is married ? ' + isMarried );
// Variable Mutation 
// variable mutation is means to change the value of variable 

ag = 'Twenty eight';
jobs = 'driver';
alert(fstName + 'is a' + ag + ' year old ' + jobs + '. Is married ? ' + isMarried );

//To get input form user 

var lastNames = prompt('What is his last Name?');
console.log(fstName + ' ' + lastNames)
