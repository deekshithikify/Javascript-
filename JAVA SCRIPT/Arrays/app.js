//create some arrays
const numbers  = [44, 56,33, 23, 45, 36, 3];
const numbers2 = new Array(22, 45, 36, 88, 56);
const fruits = ["Apple", "Banana", "Orange"];
const mixed = [22, "hello", true, undefined, null];

let val;

//get the array length
val = numbers.length;

//check if its an array
val = Array.isArray(numbers);

//get a single value
val = numbers[0]; 

//insert or replace
numbers[2] = 100;

//find the index value
val = numbers.indexOf(36);

//Mutatting the array
//Add a number to the end of an array
numbers.push(250);

//add to the front of the array
numbers.unshift(120);

//remove the last number from the array
numbers.pop();

//remove the first number from the array
numbers.shift();

//splicing
numbers.splice(1, 2);

//reverse the array
numbers.reverse();

//concat the array
val = numbers.concat(numbers2);

//sort
val = fruits.sort();
val = numbers.sort();
val = numbers.sort(function (x, y){
    return x - y;
});
val = numbers.sort(function (x, y){
    return y - x;
});

console.log(numbers);
console.log(val);