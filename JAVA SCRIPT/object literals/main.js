//object literals

const person ={
    firstName: "Surya",
    age: 25, 
    hobbies: ["eat", "sleep", "code"],
    address:{
        city: "Bengaluru",
        state: "Karnataka",
    },
    grtBirthYear:function(){
        return 1995 - this.age;
    },
};

let val;
val = person;

//console.log(val.address.city);
//console.log(val.hobbies[2]);


console.log(val,grtBirthYear());