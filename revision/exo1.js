function sortLetters(str){
    var table1=[]

    for(i=0;i<=str.length-1 ;i++){
        table1.push(str[i])
    }
    var b =table1.sort()
    return b.join("")
}
console.log(sortLetters("konexio"))