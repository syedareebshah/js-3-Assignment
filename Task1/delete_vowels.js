function deleteVowels(sentence){
for(var i=0;i<sentence.length;i++){
    if(sentence[i]=='a'||sentence=='e'||sentence[i]=='i'||sentence=='o'||sentence[i]=='u')
    {
        sentence=sentence.replace(sentence[i],'');
    }
}
return sentence;
}

var sentence="My name is areeb shah.";
if(sentence.length<25)
{
    console.log("After deleting vowels: "+deleteVowels(sentence));
}
else{
    console.log("**The sentense is more than 25 character**");
}