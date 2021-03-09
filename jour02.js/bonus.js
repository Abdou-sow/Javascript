var random= Math.random()
var min = 1;
var max = 6;

var b = Math.floor(random * (max - min + 1) + min)
console.log(b)
if( b== 6){
    console.log("Yes i win")
}
else{
    console.log("So close..")
}