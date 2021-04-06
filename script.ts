//union type
let a: (number | string | boolean)[];

a = ["messi", 12, true];

console.log(a);

//object
let b: {
   name: string;
   age: number;
   adult: boolean;
};

b = {
   name: "Fuad",
   age: 23,
   adult: true,
};

console.log(b);

//dynamic type
let c: any;

c = ["messi", 12, true];

c.push("ronaldo");

console.log(c);

//function type
function myFunc(a: string, b: string, c: string = "C") {
   console.log(c);
   console.log(a, b);
}

myFunc("A", "B");

//function signatures
// let userInfo: (
//    name: string,
//    age: number,
//    address: {
//       road: string;
//       house: number;
//    }
// ) => void;

// console.log(
//    userInfo("messi", 34, {
//       road: "jackson-height",
//       house: 11,
//    })
// );

//classes
class Person {
   name: string;
   age: number;
   country: string;

   constructor(n: string, a: number, c: string) {
      (this.name = n), (this.age = a), (this.country = c);
   }
}

const Person1 = new Person("John Doe", 30, "USA");
const Person2 = new Person("Jane Doe", 30, "Canada");

console.log(Person1.name);

const persons: Person[] = [];

persons.push(Person1);
persons.push(Person2);

console.log(persons);
