var fs = require("fs");

// fs.stat("input.txt", function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }

//     console.log(stat);

//     if (stats.isFile()) {
//         console.log("C'est un fichier !");
//     }
// });
// fs.writeFile(, data, [options,] callback)
fs.readFile("jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
    var a = data.toString()
    console.log(a);
 });