var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

//console.log(a)
var cakeChoco = cakes.filter(function(elem){
    return((elem.flavor =="chocolate"))
}).map(function(elem) {
    elem.status="sold out"
    return (elem)  
})
console.log(cakeChoco)