var johnscore1,johnscore2,johnscore3,mikesocre1,mikesocre2,mikesocre3;
johnscore1=89;
johnscore2 = 120;
johnscore3 = 103;

mikesocre1 = 116;
mikesocre2 = 84;
mikesocre3 = 123;

var johnTeam = 'John Team';
var mikeTeam = 'Mike Team';
//calculate average of the team


var johnTeamAvg = (johnscore1+johnscore2+johnscore3) / 3;
var mikeTeamAvg =  (mikesocre1+mikesocre2+mikesocre3) / 3;

johnTeamAvg > mikeTeamAvg ? johnTeam +' is winner' + johnTeamAvg : mikeTeam + ' is winner' + mikeTeamAvg;


//3
if(johnTeamAvg > mikeTeamAvg){
    console.log('John\'s team wins with' + johnTeamAvg);
}else if(mikeTeamAvg > johnTeamAvg){
    console.log('Mike\'s team wins with ' + mikeTeamAvg );

}else {
    console.log('There is a draw');
}








var maryscore1,maryscore2,maryscore3,maryTeamAvg,maryTeam;

maryscore1= 97;
maryscore2 = 134;
maryscore3 = 105;

maryTeamAvg =  (maryscore1+maryscore2+maryscore3) / 3;
maryTeam = 'Mary Team';

if (maryTeamAvg > johnTeamAvg && maryTeamAvg >mikeTeamAvg){
    console.log(maryTeam + ' average is grater than other');
}else if( johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg){
    console.log(johnTeam + 'average is greater than other');

}else{
    console.log(mikeTeam + 'average is greater than other ');
}
