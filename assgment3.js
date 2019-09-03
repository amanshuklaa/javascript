/**Assigment */

var tiparry = [];
var totalbill = [];
function tipCalculator(bills){
if (bills < 50){
    var per = percentCalculator(20)
    var tip  = per * bills;
    tiparry.push(tip);
    totalbill.push(bills+tip)
    
}else if(bills > 50 && bills < 200){
    var per = percentCalculator(15)
    var tip  = per * bills;
    tiparry.push(tip);
    totalbill.push(bills+tip)
}else {
    var per = percentCalculator(10)
    var tip  = per * bills;
    tiparry.push(tip);
    totalbill.push(bills+tip)
}
}

function percentCalculator(percent){
    return percent/100;
}
console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));
console.log(tiparry);
console.log(totalbill);