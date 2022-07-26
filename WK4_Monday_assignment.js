//Inheritance 

let Person = {
  name : "Dikko Hikmat",
  idNum : "2022/1234",
  bestColor : "Blue",
  hairColor : "Black",
  talk : function (){
    return " talk";
  },
  write : function(){
    return " write";
  },
  read : function(){
    return " read";
  },
  see : function(){
    return " see";
  },
  performAction : function(){
    return this.name + " with " + this.idNum + " identification number can " + this.talk() + ", " + this.write() + ", " + this.read() + ",  and" + this.see() + " clearly.\n Thank you.";
  }
}

function School(){
  return Person;
}

let school = new School();

console.log(school.performAction());
console.log(" ");
school.name = "Omotayo Mutiat";
school.idNum = "2022/1444";
console.log(school.performAction());
