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

function laptop(user) {
  let size = 20;
  let colour = 'blue';
  let windowsFolder = 'windows';

  function checkRole() {
    if (user == 'Admin') {
      return true;
    }
    return false;
  }


  return {
    size: 20,
    color: 'blue',
    color: 'Grey',
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
      return colour;
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
    }
  }
}

//OOP method

//let laptop = {
//    size: 20,
//    color: 'blue',
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

//Encapsulation method
let laptopObject = new laptop();
laptopObject.size = 10;
console.log(laptopObject.getActual());
console.log(laptopObject.getColor());

let user1 = new laptop('Employee');
let user2 = new laptop('Admin');

console.log(user1.getWindowsFolderName());
user1.setWindowsFolderName('program');
user2.setWindowsFolderName('program');