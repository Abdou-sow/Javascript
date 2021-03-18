//01somme des carrés
var totale=0
for(var i =5; i<=10;i++){
    totale=totale+(i**2)
}
//console.log(totale)



//02 comptons 
var nmb=0
for(var i=100; i<1000; i++){
    if(i%7==0){
        nmb=nmb+1
    }
}
//console.log(nmb)

//03 chanceux
var plus=0
for(var i=0; i<=20; i++){
    var b = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    console.log(b)
    if(b>=5){
        plus=plus+1

    }
}
//console.log("les plus de 5 sont au nombre de :" + plus)




