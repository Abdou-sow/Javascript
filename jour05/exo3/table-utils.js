function multiply(num) {
    var a = parseInt(num);
    var rslt = 0
    for (var i = 0; i <= 10; i++) {
        rslt = i * a
        console.log(num, "*", i, "=", rslt)
    }
}

function addition(nmm) {
    var a = parseInt(num);
    var rslt = 0
    for (var i = 0; i <= 10; i++) {
        rslt = i + a
        console.log(num, "+", i, "=", rslt)
    }
}
module.exports = { multiply }