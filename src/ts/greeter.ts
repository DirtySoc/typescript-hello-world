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
var user = new Student("Derek", "A", "Willingham");

document.body.innerHTML = greeter(user);
document.title = "Hello TypeScript!";
console.log("Hello World from TypeScript!");