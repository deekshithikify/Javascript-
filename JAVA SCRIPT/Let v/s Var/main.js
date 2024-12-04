// //Var  v/s  let

function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = "blue";
        }
        console.log(color);
}
}
start();



var age = 25;  //its appends to window object
let age1 = 27;  // will not append

//var --> function scope
//let and const --> block scope
