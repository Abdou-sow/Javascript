function countEach(str) {
    var a = 0
    var b = 0

    for (i = 0; i <= str.length - 1; i++) {

        if (str[i] == "x") {
            a = a + 1
        }
        else if (str[i] == "o") {
            b = b + 1
        }
        else {
            return "erreur"

        }

    }
    if (a == b) { 
        return true
    }
    else{
        return false
    }
}
console.log(countEach("xxooooox"))
