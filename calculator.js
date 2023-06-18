let a;
let b;
let c;

/** Hypotenuse Calculator Program */
document.getElementById("hypotenuse").onclick=function(){
    a=document.getElementById("sideOne").value;
    b=document.getElementById("sideTwo").value;
    a=Math.pow(Number(a),2);
    b=Math.pow(Number(b),2);
    c=Math.sqrt(a+b);
    document.getElementById("result").innerHTML=c;
}

/** Random Number */
let number=Math.floor(Math.random(1)*6+1);
console.log(number);

/** Slice Example */
let fullName="Srinivas Chary Sankoji";
let firstName=fullName.slice(0,8);
console.log(firstName)

/** Split Example */
const nameArray=fullName.split(" ");
console.log(nameArray[2]);

