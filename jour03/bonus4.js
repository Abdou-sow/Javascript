var tableau = [] ;
for(var i=0 ; i<=19; i++){
    var random= Math.random()
    var min = 0;
    var max = 100;
    var b = Math.floor(random * (max - min + 1) + min);
    tableau.push(b)
}
console.log(tableau)
var plusGrand=tableau[0]
for(var j=1 ; j<=tableau.length; j++){
    if(plusGrand<tableau[j]){

        plusGrand=tableau[j]
  }
   
}
console.log(plusGrand) 


