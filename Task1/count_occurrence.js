function countOccurrence(text){
var counter=0;
var occur=0;
for(var i=0;i<text.length;i++){
    if(text[i]=='a'||text[i]=='e'||text[i]=='i'||text[i]=='o'||text[i]=='u'){
        occur++;
        if(occur==2)
        {
            counter++;
        }
    }
    else
    {
        occur=0;
    }
}
return counter;
}

var text="Pleases read this application and give me gratuity";
console.log('Occurances in the text are: '+countOccurrence(text)+' time.');