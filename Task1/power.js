
function power(base,exponent){
    var value=1;
    for(var i=1;i<=exponent;i++)
    {
        value*=base;
    }
    return value;
}

var base=2;
var exponent=3;
console.log(power(base,exponent));