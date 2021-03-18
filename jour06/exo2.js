function calculateAge(str) {
    var demo = new Date().getFullYear();
    //console.log(demo);
    var anne = parseInt(str.slice(6, 10))
    //console.log(anne)
    var age = demo - anne
    console.log("tu as",age,"ans")

}
calculateAge("15/04/2000")