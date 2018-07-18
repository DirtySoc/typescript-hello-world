class Student {
    fullName: string;
    constructor(public firstName: String, public middleInitial: String, public lastName: String) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// interface Person {
//     firstName:string;
//     lastName: string;
// }

function greeter(person: Student) {
    return "Hello " + person.firstName + " " + person.lastName;
}

// var user = "Jane User";
var user = new Student("Lisa", "A", "Willingham");

document.body.innerHTML = greeter(user);
console.log("Hello World from TypeScript!");