function mainFunction(){
    var mathMarks=10;
    var englishMarks=20;
    var urduMarks=40
    console.log("Average Marks: "+average(mathMarks,englishMarks,urduMarks));
    console.log("Percentage: "+percentage(mathMarks,englishMarks,urduMarks));
}

function average(mathMarks,englishMarks,urduMarks){
var aver=(mathMarks+englishMarks+urduMarks)/3;
return aver;
}

function percentage(mathMarks,englishMarks,urduMarks){
var totalMarks=200;
var perc=((mathMarks+englishMarks+urduMarks)*100)/totalMarks;
return perc;
}

mainFunction();