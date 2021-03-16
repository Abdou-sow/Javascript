function checkPal(str){
    var b=1
    for(var i=0 ,j=str.length -1; i<j;i++,j--){
        // console.log("mon i"+str[i])
        // console.log("mon j"+str[j])
        if(str[i] == str[j]){
            b=b*1
        }
        else{
            b=b*0
        }
    }
    return b  
}
var x =checkPal("potiop")

if(x == 1){
    console.log("Palindrome !")
}
else{
    console.log("Nope")
}
