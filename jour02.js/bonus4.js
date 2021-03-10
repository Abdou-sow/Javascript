var nb = 45.050
var b = nb.toString()
var st = b.split("")
console.log(st)
var c = b.search("\\.")
var d = 
console.log(c)
if( b[c+1]>=5) {
    console.log("round:",b[c-1]+1)
}
else{
    console.log("round: ", b[c-1])
}