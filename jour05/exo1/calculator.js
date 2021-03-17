// var prompt = require("prompt");
// prompt.start();


// prompt.get(["nmb1", "oper", "nmb2"], function (err,res) {
//     // if (err) {
//     //     return onErr(err);
//     // }
//     function calculate(nmb1, oper, nmb2) {
//         var a = parseInt("nmb1");
//         var b = parseInt("nmb2");
//         if (oper == "*") {
//             console.log(a * b);
//         }
//         else if (oper == "+") {
//             console.log("a+b" + a + b);
//         }
//         else if (oper == "-") {
//             console.log("a-b" + a - b);
//         }
//         else if (oper == "/") {
//             console.log("a/b" + a / b);
//         }
//         else if (oper == "%") {
//             console.log("a%b" + a % b);
//         }
//         else {
//             console.log(err);
//             return;

//         }

//     }

//     console.log("=> resultat : " + res.calculate(nmb1, oper, nmb2));
//    // console.log("=> opperateur : " + res.oper);
//     //console.log("=> nmb2 : " + res.nmb2);
// });

// var prompt = require("prompt");
// prompt.start();
// nub1=prompt("le premier nombre")
// oper=prompt("l'opperateur")
// nub2=prompt("le deuxieme nombre")
// function calculate(nmb1, oper, nmb2) {
//     var a = parseInt("nmb1");
//     var b = parseInt("nmb2");
//     if (oper == "*") {
//         console.log(a * b);
//     }
//     else if (oper == "+") {
//         console.log("a+b" + a + b);
//     }
//     else if (oper == "-") {
//         console.log("a-b" + a - b);
//     }
//     else if (oper == "/") {
//         console.log("a/b" + a / b);
//     }
//     else if (oper == "%") {
//         console.log("a%b" + a % b);
//     }
//     else {
//         console.log(err);
//         return;

//     }

// }
// var num1=process
// function calculate ()

//console.log(process.argv);

function calculate(nmb1, nmb2, oper) {
    var a = parseInt(nmb1);
    var b = parseInt(nmb2);
    var rslt =0
    if (oper == "*") {
        rslt = a*b 
        console.log(rslt);
    }
    else if (oper == "+") {
        rslt = a+b 
        console.log(rslt);
    }
    else if (oper == "-") {
        rslt = a-b 
        console.log(rslt);
    }
    else if (oper == "/") {
        rslt = a/b 
        console.log(rslt);
    }
    else if (oper == "%") {
        rslt = a%b 
        console.log(rslt);
    }
    else {
        console.log(err);
        return;

    }
}
var num1 = process.argv[2];
console.log("num1",num1)
var num2 = process.argv[3];
console.log("num2",num2)
var oper = process.argv[4];
console.log("oper",oper)
calculate(num1, num2, oper)

