class Computer{
  constructor(brand, name, ram, storage){
    this.name = name;
    this.brand = brand;
    this.ram = ram;
    this.storage = storage;
  }
  getDetails(){
    return (`This laptop ${this.brand}'' is owned by ${this.name}, it has ${this.ram}GB RAM and ${this.storage}TB storage.`);
  }
  upgrade(ram){
    if(ram <= 8){
      return 'Invalid input';
    } else{
      return 'RAM capacity upgraded';
    }
  }
}

let com = new Computer("HP", "Hikmat", 8, 1);
console.log(com.getDetails());
let up = com.upgrade(16);
console.log("\n" + up);




// Joe’s Automotive Shop services foreign cars and specializes in servicing cars made by Mercedes,
// Porsche, and BMW. When a customer brings a car to the shop, the manager gets the customer’s
// name, address, and telephone number. The manager then determines the make, model, and year
// of the car and gives the customer a service quote. The service quote shows the estimated parts
// charges, estimated labor charges, sales tax, and total estimated charges.

class JoeShop{
  constructor (carName, carModel, carYear){
    this.carName = carName;
    this.carModel = carModel;
    this.carYear = carYear;
}
getDetails(){
  return (`${this.carName} of model ${this.carModel} in the year ${this.carYear}`);
}
  
  manager(cusName, cusAddress, cusTelephone){
     this.cusName = cusName;
     this.cusAddress = cusAddress;
     this.cusTelephone = cusTelephone;
    
     return (`Customer's name : ${this.cusName} \n Customer's address : ${this.cusAddress} \n Customer's Telephone : ${this.cusTelephone}`)
  }
  estimate (partCharge, laborCharge, salesTax){
    
   this.partCharge = partCharge;
   this.laborCharge = laborCharge;
   this.salesTax = salesTax;

    return (`Service quote is as follows; \n Part Charge = ${this.partCharge} \n Labour Charge = ${this.laborCharge} \n Sales Tax = ${this.salesTax} \n Total = ${this.partCharge + this.laborCharge + this.salesTax} `)

 } 

}

let myCar = new JoeShop("Mercedes", "SVG", "2019");
let get = myCar.getDetails();
let man = myCar.manager("HikmatD" ,"Lekki, Lagos ", "3467532");
let est = myCar.estimate(10000, 4000, 5000);

console.log("\n" + get);
console.log("\n" + man);
console.log("\n" + est);