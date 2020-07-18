function totalCurrency(amount){
    var hundred,fifty,ten;
    hundred=parseInt((amount/100));
    fifty=parseInt(((amount % 100) / 50));
    ten=parseInt(((amount % 100) % 50) / 10);
    return (hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes.")
}

var amount = 260;
console.log("You will have "+totalCurrency(amount))