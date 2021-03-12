var lettre = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var password=[];
function generatePassword (num){
    if(num>=6 && num<=15){
        for (var i = 0; i<num; i++) {
            var min = 0;
            var max = lettre.length - 1;
            var random= Math.random();
            var b = Math.floor(random * (max - min + 1) + min);
            password.push(lettre[b]);
        }
        console.log("password :" +password.join(""));
    }
    else{
        console.log("error")
    }
}

generatePassword(6)