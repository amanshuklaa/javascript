/**Objects and methods */



var aman = {
    firstName : 'Aman',
    lastName : 'Shukla',
    birthYear : 1994,
    family : ['seema','sunil'],
    job : 'programmer',
    isMarried  : false,
    calcAge: function(birthYear){
        return 2019 - birthYear;
    }
};
console.log(aman.calcAge(1993));
//we can use this to access class intance
var aman = {
    firstName : 'Aman',
    lastName : 'Shukla',
    birthYear : 1994,
    family : ['seema','sunil'],
    job : 'programmer',
    isMarried  : false,
    calcAge: function(){
        return 2019 - this.birthYear;
    }
};
console.log(aman.calcAge());

//adding age in current object
var aman = {
    firstName : 'Aman',
    lastName : 'Shukla',
    birthYear : 1994,
    family : ['seema','sunil'],
    job : 'programmer',
    isMarried  : false,
    calcAge: function(){
        return 2019 - this.birthYear;
    }
};

aman.age = aman.calcAge()
console.log(aman)


//adding age in current object
var aman = {
    firstName : 'Aman',
    lastName : 'Shukla',
    birthYear : 1934,
    family : ['seema','sunil'],
    job : 'programmer',
    isMarried  : false,
    calcAge: function(){
        this.age =  2019 - this.birthYear; //instead of return we can use this
    }
};
aman.calcAge();
console.log(aman)