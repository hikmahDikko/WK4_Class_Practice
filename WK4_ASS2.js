//ASSIGNMENT 1
// Hameed is a Yoruba boy Living in Abuja, he is a student of Nile University studying Computer Science, He has two friends John and James, they are also students of Nile University. Hameed wants to apply to Seamfix as a Program manager, so he need to send his credentials. also he wants to create a domiciliary account with Zenith Bank, Model Hameed using OOP, and outline the principle of OOP you applied at any point.

console.log("\nASSIGNMENT 1 *************************")

//Polymorphism
var Employee = {
    name : "Hameed",
    tribe : "Yoruba",
    location : "Abuja",
    school : "Nile University",
    discipline : "Computer Science",
    friends : "John and James",
    credentials : "hameedCredentials.pdf",
    position : 'Program Manager',
    //Inheritance
    bank : function(){
       let v = zenith();
       return v;
    }
}

//Abstraction
function zenith () {
    return " Create a Domicilliary Account";
}

//Encapsulation
function Seamfix (employee) {
    this.name = employee.name;
    this.tribe = employee.tribe;
    this.friends = employee.friends;
    this.location = employee.location;
    this.school = employee.school;
    this.discipline = employee.discipline;
    this.credentials = employee.credentials;
    this.position = employee.position;
    this.bank = employee.bank();
    

    console.log(`${this.name} is a/an ${this.tribe} boy Living in ${this.location}, he is a student of ${this.school} studying ${this.discipline}, He has two friends ${this.friends}, they are also students of ${this.school}. ${this.name} wants to apply to Seamfix as a ${this.position}, so he need to send his credentials. also he wants to ${this.bank} with Zenith Bank.`)
        
}

Seamfix(Employee);

console.log("\nASSIGNMENT 2 *************************");


//ASSIGNMENT 2
const shape = {
    type : "Triangle",
    a : 1,
    b : 2,
    c : 3,
    getType : function(){
        return `The shape type is ${this.type} shape with the length sides of ${this.a}, ${this.b}, ${this.c} which makes the perimeter = ${this.a + this.b + this.c}`;
    }
}

function Triangle (side) {
    this.a = side.a;
    this.b = side.b;
    this.c = side.c;
    this.type = side.type;
    this.getPerimeter = side.getType;
}

const tri = new Triangle(shape);
console.log(tri.getPerimeter());

