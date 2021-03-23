var array =[1, "toto", 34, "javascript", 8]
var numbers =array.filter(function(element){
    return(typeof(element)=="number")
})
console.log(numbers)