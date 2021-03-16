var prompt = require("prompt");
prompt.start();

function calculate(nmb1, oper, nmb2) {
    var a = parseInt(nmb1);
    var b = parseInt(nmb2);
    if (oper == "*") {
        console.log(a * b);
    }
    else if (oper == "+") {
        console.log("a+b" + a + b);
    }
    else if (oper == "-") {
        console.log("a-b" + a - b);
    }
    else if (oper == "/") {
        console.log("a/b" + a / b);
    }
    else if (oper == "%") {
        console.log("a%b" + a % b);
    }
    else {
        console.log(err);
        return;

    }

}
prompt.get(["nmb1", "opperateur", "nmb2"], function (err,res) {
    if (err) {
        return onErr(err);
    }

    console.log("=> resultat : " + res.calculate(nmb1, oper, nmb2));
   // console.log("=> opperateur : " + res.oper);
    //console.log("=> nmb2 : " + res.nmb2);
});

