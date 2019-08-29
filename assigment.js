var markmass, johmass , markheight,johnheight,johnbmi,markbmi,ismarkbmi;
markmass = prompt('Enter mark mass');
johmass =  prompt('Enter john mass');
markheight =  prompt('Enter mark height');
johnheight = prompt('Enter john height ');

johnbmi =  markmass / (markheight * markheight);
markbmi =  markmass  / (markheight * markheight);


ismarkbmi =  markbmi  > johnbmi;

console.log('Mark Mass: '+ markmass + 'Mark Height: ' + markheight);
console.log('John MAss: ' +  johmass + 'John Height: ' + johnheight);
console.log('John BMI: ' + johnbmi);
console.log('Mark BMI: '+ markbmi);
console.log('Is Mark BMI is higher than John ?'+ ismarkbmi);


