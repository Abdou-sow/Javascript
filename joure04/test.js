var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function generatePassword(num) {
    var password = []
    if (num < 6 || num > 15) {
        return "erreur";

    }
    else{
        for (var i = 0; i <= num; i++) {

            var max = lettres.length - 1

            var b = Math.floor(Math.random() * (max + 1))

            //console.log("b" + b)
            //console.log("lettre" + " " + lettres[b])
            password.push(lettres[b])

        }

        return password.join("")
    }

}

var final= generatePassword(6)
console.log(final)