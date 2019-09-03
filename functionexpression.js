/**Function Statement and Expressions
 * 
 */

// Function Declaration
// function whatDoYouDo(job,firstName) {

// }



//function Expression
 var whatDoYouDo = function(job,firstName) {
 switch(job) {
     case 'teacher':
         return firstName  + ' teaches kids how to code';

        
     case 'driver':
         return firstName + ' drives a cab in Banglore';

     case 'designer':
         return firstName + ' designs beautiful website';

     default:
         return firstName + 'Does something else';

 }
 }




 console.log(whatDoYouDo('teacher','Aman'));

 console.log(whatDoYouDo('designer','Aman'));

 console.log(whatDoYouDo('retired','Aman'));