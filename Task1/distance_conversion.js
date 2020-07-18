function meters(distance){
return distance*1000;
}

function feet(distance){
return distance*3280.84;
}

function inches(distance){
return distance*39370.1;
}

function centimeters(distance){
return distance*100000;
}

var distance=20;

console.log("Distance in meters: "+meters(distance));
console.log("Distance in feet: "+feet(distance));
console.log("Distance in inches: "+inches(distance));
console.log("Distance in centimeters: "+centimeters(distance));

