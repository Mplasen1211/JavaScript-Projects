// While Loop
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
// For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// Array
function dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[2] + ".";
}
// "Let" Keyword 
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);