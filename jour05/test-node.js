//console.log(process.argv);
var args = process.argv.slice(2);

console.log('arguments : ', args);
console.log(typeof parseInt(process.argv[2]) )
console.log(parseInt(process.argv[2])+parseInt(process.argv[4]))