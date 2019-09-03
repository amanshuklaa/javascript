//IF / else statement


var firstName =  'Aman';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}

//we can pass boolean variable directily 

 firstName =  'Aman';
 isMarried = false

if (isMarried === true) {
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}


//assigment with if else

var markmass, johmass , markheight,johnheight,johnbmi,markbmi,ismarkbmi;
markmass = prompt('Enter mark mass');
johmass =  prompt('Enter john mass');
markheight =  prompt('Enter mark height');
johnheight = prompt('Enter john height ');

johnbmi =  markmass / (markheight * markheight);
markbmi =  markmass  / (markheight * markheight);




console.log('Mark Mass: '+ markmass + 'Mark Height: ' + markheight);
console.log('John MAss: ' +  johmass + 'John Height: ' + johnheight);
console.log('John BMI: ' + johnbmi);
console.log('Mark BMI: '+ markbmi);

if (markbmi  > johnbmi){
    console.log('Mark BMI is greater than mark: ' + johnbmi)
}else{
    console.log('John BMI is greater than mark:  ' + markbmi)
}