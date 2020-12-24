//"Type of" Operator//
//**outputs "string"**/
document.write(typeof "Word");
//**outputs "number"**/
document.write(typeof 3);

//Infinity//
document.write(2E310);

//-Infinity//
document.write(-3E310);

//Boolean Logic//
//**output "true**//
document.write(10 > 2);
//**output "false"**//
document.write(10 < 2);

//Console.log() Method//
console.log(2 + 2);

//Coercion//
document.write("10" + 5);

//Double Equal Signs//
//**outputs "true"**//
document.write(10 == 10);
//**outputs "false"**//
document.write(3 == 11);

//Triple Equal Signs//
//**Return true by ensuring to match the data type and value**//
Age1 = 40
Age2 = 40  
document.write (Age1 === Age2);
//**Return false by writing a different data type and different value**//
Age = 40
Species = Animal
document.write (Age === Species);
//**Return false by writing a different data type but the same value for both.**//
NumberofDogs = 10
NumberofHumans = 10
document.write (NumberofDogs === NumberofHumans);
//**Return false by writing the same data type but a different value for both.**//
Salary1 = 40000
Salary2 = 60000
document.write (Salary1 === Salary2);

//Logical Operators//
document.write(5 > 2 && 10 > 4);

//NOT Operator//
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}


