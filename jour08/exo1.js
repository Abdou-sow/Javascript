var request = require('request');


// function getCountries() {


//     request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
//         var result = JSON.parse(body);
//         var countriesNames = []

//         for (var i = 0; i < result.length -1; i++) {
//             countriesNames.push(result[i].name)
//         }
//         console.log(countriesNames.join("-"))
//         //console.log(result.length)
//     });

// }

// getCountries()



function getCountries() {
    request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

        var result = JSON.parse(body);
        var countriesNames = result.map(function (nomPays) {

            return nomPays.name;
        })

        console.log(countriesNames.join("-"))
    })
}

getCountries();