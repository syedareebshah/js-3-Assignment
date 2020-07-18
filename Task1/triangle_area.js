function areaOfTriangle(a,b,c){
var s=calculatingSides(a,b,c);
var area=s*(s-a)*(s-b)*(s-c);
return area;
}

function calculatingSides(a,b,c){
var s=(a+b+c)/2;
return s;
}

var a=10;
var b=200;
var c=30;
console.log(areaOfTriangle(a,b,c));