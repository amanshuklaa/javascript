/**Lecture: Hoisting */

function calculateAge(year){
    console.log(2019-year);
}

calculateAge(1990);//after function defintaion we are calling it 

//calling function before declearation

calculateAge(1993);
function calculateAge(year){
    console.log(2019-year);
}

//functrion expression
//retirement(1990);


//hoisting is only work with function decleration not with function expressions
var retirement = function(year){
    console.log(65- (2019 - year));
}



 //variable
//hoisting also happen with variable in a different way
console.log(age)
var age = 224
console.log(age);
//what is we will use variable because declare it


function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age)