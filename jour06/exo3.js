var prompt = require("prompt");

prompt.start();

function onErr(err) {
    console.log("erreur");
    return;
}

prompt.get(["email", "username", "passWord"], function (err, res) {


    if (res.email.match(/[a-z]+[@.]/gi) != null,
        res.username.match(/[a-z 1-9 ]+-+[1-9 - a-z]/gi) != null,
        res.passWord.match(/(?=.*[A-Z])(?=.*[0-9])(?=.*[-])/) != null
    ) {
        //console.log("=> Username : " + res.username);
        console.log("All good!")
    }
    else {
        //console.log("=> Username : ", "c pas le bon format")
        console.log("error")

    }


});