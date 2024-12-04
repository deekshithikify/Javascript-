let val;

//Number to String
val = String(5+5);

//Boolean to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1, 2, 3, 4, ]);

//toString
val= (5).toString();
val= true.toString();

//string to number
val = Number("5");

//Boolen value
val = Number(true);
val = Number(false);
val = Number(null);

//parseInt()
val = parseInt("5");
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//type coehesion
const val1 ="5";
const val2 =6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum)