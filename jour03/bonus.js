var limite = 100
for(var i = 0 ; i<=limite; i++){

    if(i%3 == 0){
        console.log("fizz")
    }
    else if(i%5 == 0){
        console.log("buzz")

    }
    if( i%3 == 0 && i%5 == 0){
        console.log("fizzbuzz")

    }
    else if(i%7 == 0){
        continue
    }
    else{
        console.log(i)

    }
}