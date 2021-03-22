var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }

]
var shortNames = longNames.map(
    function () {
        var tableFinal = []
        for (var i = 0; i <= longNames.length-1; i++) {
            var nameComplet = longNames[i].firstName +" "+ longNames[i].lastName
            //console.log(nameComplet)
            tableFinal.push(nameComplet)
        }
        return tableFinal
    }
)
//console.log(longNames.length)
console.log(shortNames)