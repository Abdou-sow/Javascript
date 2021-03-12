function launchDice(numberOfDice) {
    var totale =0;
    for(var i=0; i <=numberOfDice;i++){
     
    var a = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    ///var b = Math.floor(Math.random() * ((6 - 1) + 1) + 1); // pour un deuxieme des
     totale = totale + a ;
    }
    console.log(totale);
    return totale
}

//launchDice(5)
var jr1=launchDice(5);
var jr2=launchDice(5);
if (jr1>jr2){
    console.log("le joueur1 est le gagnant ")
}
else if(jr1==jr2){
    console.log("a egalité ")
}
else{
    console.log("le joueur2 est le gagnant ")
}