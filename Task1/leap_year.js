
function leapYear(year){
    if(year%4==0)
    {
        return "Year is Leap";
    }
    else
    {
        return "year is not Leap";
    }
}
    
var year=2008;
console.log(leapYear(year));