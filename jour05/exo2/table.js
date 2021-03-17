function multiply(nmb){
    if(typeof(num)== "number"  && process.argv.length == 3 ){
        var a =parseInt(num);
        var rslt=0
        for(var i=0; i<=10; i++){
            rslt=i*a
            console.log(num,"*",i,"=",rslt)
        }
    }
    else{
        console.log("error")
    }
}

var num = parseInt(process.argv[2])
multiply(num)