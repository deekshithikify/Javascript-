//Datatypes in javascript

//two types of datatypes
/*primitive data types
  stored directly in the location the variable access
  stored in the stack

  String
  Number
  Boolean
  Null
  Undefined
  Symbol

  Reference data types
   accessed by reference
   stored in heap, and points to location in memory
   
   Arrays,
   object litrerals,
   functions
   */


   //string
   const name ="Surya";

   //number
   const age = 11.362453

   //boolean
   const hasSiblings =true;

   //null
   const abc = null; //we are storing a value of nothing

   //undefined
    let a;

    const sym = Symbol();
    console.log(typeof sym);



    //Reference Data types
    //Arry
    const hobbies = ["cricket","movies"];

    //object literals
    const person ={
      name: "surya",
      age: 24,
    };

    //Dates
    const today = new Date();
     console.log(today);

     console.log(typeof today);