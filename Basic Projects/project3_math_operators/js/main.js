//Alert//
window.alert("This is math for developers!");

//Writing Things//
document.write("Here are various math functions made with JavaScript: ")

 //Assigning Variables and Writing Things//
 var X = "Math is Hard"
document.write(X);

//Functions with Color//

function Math_Functions() {
    var str = "Addition, Subtraction, Multiplication, and Division."
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}

//Concatenate Strings//
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from the Tech Academy.";
    document.getElementById("Concatenate").innerHTML = sentence;
}

//Addition Function//
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

//Subtraction Function//
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

//Multiplication Function//
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}

//Division Function//
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

//Multiple Operations Function//
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//Modulus Operator Function a.k.a the remainder//
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//Increment and Decrement Operators//
var X = 5;
X++;
document.write(X);

var Y = 5.25;
X--;
document.write(X);


//Random Function//
window.alert(Math.random() *100);


