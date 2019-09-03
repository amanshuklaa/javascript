/**Objects and properties */

var aman = {
    firstName : 'Aman',
    lastName : 'Shukla',
    birthYear : '1994',
    family : ['seema','sunil'],
    job : 'programmer',
    isMarried  : false
};
//method one to access object
console.log(aman);
//method two to access object
console.log(aman.firstName);
//method three to access object
console.log(aman['lastName']);
//method four to access object

var x = 'birthYear';
console.log(aman[x]);

//mutate object data 

aman.job = 'Designer';
console.log(aman.job)


//another way to create object 
var vivek = new Object();

console.log(vivek);
vivek.firstName = 'vivek';
vivek.lastName = 'Gupta';
vivek.birthYear = 1992;
vivek.family = ['aman','ayush'];
vivek.job = 'Programmer';
vivek.isMarried = false;
console.log(vivek)