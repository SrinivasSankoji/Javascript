var person ={
  "firstName":"Bhaumik",
  "lastName":"Chary",
  "fullName": function()
  {
      return this.firstName + " "+ this.lastName + " Sankoji";
  }  
};

var person2=person;
person={};
var name=person2.fullName();
console.log(name);