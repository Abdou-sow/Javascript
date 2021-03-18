var prompt = require("prompt");

prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

prompt.get(["email", "username", "passWord"], function (err, res) {
    if (err) {
        return onErr(err);
    }
    if(res.email.match())

  //console.log("Données reçues :");
  console.log("=> Email : " + res.email);
    console.log("=> Username : " + res.username);
    console.log("=> mot de passe : " + res.passWord);


});