var request = require('request');

function getFact(xxx) {

    request.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200", function (err, res, body) {

        var result = JSON.parse(body);
        console.log(result.results[xxx].name);

    })
}

getFact(0)
