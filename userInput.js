//let userName=window.prompt("Please Enter Username : ");
//console.log(userName);

let userName;

document.getElementById("button").onclick=function(){
    //userName=document.getElementById("userName").value;
    //document.getElementById("enteredText").innerHTML=userName;
};

let x="25";
x=Number(x)+1
///document.getElementById("enteredText").innerHTML=x;

/** Type Conversion Example */
document.getElementById("button").onclick = function () {
    userName = document.getElementById("userName").value;
    if (!typeof userName == String) {
        userName = Number(userName);
        document.getElementById("enteredText").innerHTML = userName;
    }
    else {
        document.getElementById("enteredText").innerHTML = "Please Enter Numbers only";
    }
}

/** Constant Exmaple */
const appname='smart-school';
console.log('Building a ',appname,'Application');

let num=9.37;
x=Math.round(num);
console.log(x);



