//union type
var a;
a = ["messi", 12, true];
console.log(a);
//object
var b;
b = {
    name: "Fuad",
    age: 23,
    adult: true
};
console.log(b);
//dynamic type
var c;
c = ["messi", 12, true];
c.push("ronaldo");
console.log(c);
//function type
function myFunc(a, b, c) {
    if (c === void 0) { c = "C"; }
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
var Person = /** @class */ (function () {
    function Person(n, a, c) {
        (this.name = n), (this.age = a), (this.country = c);
    }
    return Person;
}());
var Person1 = new Person("John Doe", 30, "USA");
var Person2 = new Person("Jane Doe", 30, "Canada");
console.log(Person1.name);
var persons = [];
persons.push(Person1);
persons.push(Person2);
console.log(persons);
