//Using Dictionaries Function//
function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

//Using Operators as Words - Delete Function//
function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}