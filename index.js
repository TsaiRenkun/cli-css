var hexfor = require("./hextorgb.js");
var rgbfor = require("./rgbtohex.js");
var rgbforhsl = require("./rgbtohsl.js");
var hexforhsl = require("./hextohsl.js");

for (var i = 2; i < process.argv.length; i++) {
    process.argv[i]
}

if(process.argv[2] === "hex"){
 // console.log(hexfor(process.argv[3]));
 // console.log(hexforhsl(process.argv[3]))

 for (var i = 3; i < process.argv.length; i++) {
    process.argv[i]
    console.log(hexfor(process.argv[i]));
    console.log(hexforhsl(process.argv[i]))
    }
}

if(process.argv[2] === "rgb"){
// set as red
var r = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);
var g = parseInt(process.argv[5]);

// this special console will create colored output
console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, "myOutput");

 console.log(rgbfor(parseInt(process.argv[3]),parseInt(process.argv[4]),parseInt(process.argv[5])));

 console.log(rgbforhsl(parseInt(process.argv[3]),parseInt(process.argv[4]),parseInt(process.argv[5])));

}