/**Functinos */





function calculateAge(birthYear){
    return 2019 - birthYear;
}

var ageAman = calculateAge(1995);
var ageVivek = calculateAge(1992);
var ageAnkit = calculateAge(1991);
console.log(ageAman);
console.log(ageVivek);
console.log(ageAnkit);

// year nint retirement

function yearsUnitRetirement(year, firstName) {
    var age  = calculateAge(year);
    var retirement = 65 -  age;
    if (retirement > 0){
        console.log(firstName + ' retires in '+ retirement +' years.');
    }else {
        console.log(firstName +' is already retired.')
    }
}

yearsUnitRetirement(1990,'Aman');
yearsUnitRetirement(1945,'Vivek');