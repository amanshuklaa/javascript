/**Coding Challenge 4*/
//object 1

var aman = {
    fullName : 'Aman Shukla',
    mass : prompt('Enter mass of aman'),
    height : prompt('Enter height of aman'),
    amanbmi : calBMI(this.mass,this.height),
    
   
} 
    //object 2
var vivek = {
    fullName : 'Vivek Gupta',
    mass : prompt('Enter mass of vivek'),
    height : prompt('Enter height of vivek'), 
    vivekbmi : calBMI(this.mass,this.height), 
    ishighest : ishighest()
} 


function calBMI (mass,height){
   return mass / (height*height);
}

function ishighest(){
    console.log(aman.amanbmi);
    if(aman.amanbmi > vivek.vivekbmi){
        return (aman.fullName + ' bmi is greater')
    }else if(vivek.vivekbmi > aman.amanbmi){
        retrun (vivek.fullName + 'bmi is greater')
    }else{
        return (aman.fullName +'and' + vivek.fullName +' both have same BMI')
    }
}
console.log(aman)
console.log(vivek)