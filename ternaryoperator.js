/**The  Ternary Operator and Switch Statement*/
var firstName = 'Aman';
var age =  36;

age  >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)



//switch car 
var job = 'teacher';
switch(job){
    case 'teacher' :
        console.log(firstName + 'Teaches kids how to code');
        break;
    case 'driver' :
        console.log(firstName + 'drive uber in banglore');
        break;
    case 'coder' :
        console.log(firstName + ' design beautiful website.');
        break;
    default:
        console.log(firstName + ' does something else!!');
}



//switch 

switch(true){
    case age < 13:
            console.log(firstName + ' is a boy.');
            break;
    case age >= 13 && age <  20:
            console.log(firstName + ' is a teenager.');
            break;
    
    case age >=20 && age <30:
            console.log(firstName + ' is a young man.');
            break;
    default:
            console.log(firstName + ' is a man');
}