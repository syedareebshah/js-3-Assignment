function indexOf(str,ch){
var index=0;
for(var i=0;i<str.length;i++)
{
    if(str[i]!==ch)
    {
        index++;
    }
    else{
        break;
    }
}
return index;
}

var str="Hello"
var ch="o";
console.log(ch+" is at index "+indexOf(str,ch));