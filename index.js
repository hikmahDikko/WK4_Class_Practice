var car = {
  model: "2019",
  brand: "Toyota"
}

let str1 = "Hikmat";
let str2 = "Dikko";
let bool = false;

console.log(str1);
str1 = str2;

console.log(str1);
car.model = "2020";
console.log(car.model);
car.color = 'Red';
console.log(car);

function multiply(value) {
  return 2;
}
console.log(multiply);

let male = 20;
let female = 30;

function Total() {
  return male + female;
}

console.log(Total());

//Encapsulation method
function laptop(user, program) {
  let size = 20;
  let color = 'blue';
  let windowsFolder = 'windows';

  function checkRole() {
    if (user == 'Admin') {
      return true;
    }
    return false;
  }


  return {
    brand: 'hp',
    processor: 'Intel',
    storage: '200GB',
    RAM: '2gb',
    browse: function() {
      console.log('browse');
    },
    switchOn: function() {
      console.log('Switch on');
    },
    shutDown: function() {
      console.log('Shut down');
    },
    specification: function() {
      return "Laptop brand is " + this.color + " and           brand is " + this.brand;
    },
    getActual: function() {
      return size * 2;
    },
    getColor: function() {
      return color;
    },
    getWindowsFolderName: function() {
      return windowsFolder;
    },
    setWindowsFolderName:
      function(newwindowsFolderName) {
        if (checkRole()) {
          windowsFolder = newwindowsFolderName;
          console.log(windowsFolder);
        } else {
          console.log("permission declined");
        }
      },
    open : function(){
    console.log("Launched " + program);
    setTimeout(function () {
      console.log("Launch " + program);
    }, 5000)
      console.log('Test');
    }
  }
}

let laptopObject = new laptop();
laptopObject.size = 10;
console.log(laptopObject.getActual());
console.log(laptopObject.getColor());

let user1 = new laptop('Employee');
let user2 = new laptop('Admin');

console.log(user1.getWindowsFolderName());
user1.setWindowsFolderName('program');
user2.setWindowsFolderName('program');

//user1.open();


//Inheritance
function LaunchProgram(user, program){
  return laptop.call(this, user, program);
}
let launch = new LaunchProgram('Employee', 'Microsoft Excel');

launch.open();
console.log(launch.brand);

//Abstraction
function Car(name){
  let timeTaken = 10000;
  return{
    timeTakenToStart : "0 sec",
    start : function (){
      console.log('STARTING ' + name);
      setTimeout(function(){
        console.log('STARTED ' + name);
        this.timeTakenToStart = 10000/1000 + ' secs';
        console.log(this.timeTakenToStart);
      }, timeTaken)
    },
    getStartingTime : function (){
      return this.timeTakenToStart;
    }
  }
}

//Polymorphism
function Bus(name){
  let car = Car.call(this, name);
  let timeTaken = 20000;
  car.start = function(){
    console.log('STARTING ' + name);
      setTimeout(function(){
        console.log('STARTED ' + name);
        this.timeTakenToStart = timeTaken/1000 + ' secs';
        console.log(this.timeTakenToStart);
      }, timeTaken)
  }
  return car;
}

let myCar = new Car('Camry');
let myBus = new Bus('Mazda');
console.log(myCar.timeTakenToStart);
myCar.start();
myBus.start();

//OOP method
//let laptop = {
//    size: 20,
//    color: 'Grey',
//    brand: 'hp',
//   processor: 'Intel',
//    storage: '200GB',
//    RAM: '2gb',
//    browse: function() {
//      console.log('browse');
//    },
//    switchOn: function() {
//      console.log('Switch on');
//    },
//    shutDown: function() {
//      console.log('Shut down');
//    },
//    specification: function() {
//      return "Laptop brand is " + this.color + " //  and           brand is " + this.brand;
//    }
//  }

//console.log(laptop);
//console.log(laptop.RAM);
//console.log(laptop.browse());
//console.log(laptop.specification());
//console.log(laptop.size);
