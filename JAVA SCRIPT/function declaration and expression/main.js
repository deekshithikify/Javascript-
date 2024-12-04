// // function declaration and expression

//fuction greet(firstName = "Surya") {
//  return `hello ${firstName}`;
// }
// console.log(greet("Deekshith")); 



// // function expression 

// const mul = function (a,b) {
//     return a * b;
// };
// console.log(mul(2, 2));



 // // IIFE-- Imedietely invokalbe function expression
 
 (function (name) {
    console.log(`${name}ran..`);
 })("surya");

 const person = {
    grtBirthday: function (day) {
        return `march ${day}`;
    },
 };
 console.log(person.grtBirthday(2));