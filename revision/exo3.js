function checkPal(str){
    for(var i=0 ,j=str.length -1; i<j;i++,j--){
        console.log("mon i"+str[i])
        console.log("mon j"+str[j])
        if(str[i] !== str[j]){
            return false
        }
        else{
            continue
        }
        return true
    }
    //return false 

}
console.log(checkPal("papa"))