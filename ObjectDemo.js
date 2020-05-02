var myObject={};
myObject.property1="Hello";


var myObject2={
        "property1":"Java",
        "property2":36,
        "property3":"JavaScript",
        "custom":{
            "property4":"Angular",
            "property5":"SpringBoot",
            "property6":"TypeScript"
        }
};

delete myObject2.custom.property6;

console.log(myObject2);