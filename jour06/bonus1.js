var moment = require("moment");

function calculateAge2(str) {

    var today = parseInt(moment().format('YYYY'));
    var anne = parseInt(str.slice(6, 10))
    var age = today - anne

    console.log("tu as", age, "ans")


}


calculateAge2("15/04/2010")
