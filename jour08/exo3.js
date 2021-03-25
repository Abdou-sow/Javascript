var request = require('request');

function getFact(xxx) {

    request.get("https://pokeapi.co/api/v2/pokemon/1", function (err, res, body) {

        var result = JSON.parse(body);
        console.log("id :", xxx);
        console.log("name :",result.results[xxx].name);

    })
}

getFact(25)
