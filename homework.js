'use strict' 
//task1 
//function printAll() {

//}
//не получилось
//task 2
const massiv1 = [1, 2, 3];
const massiv2 = ['a', 'b'];
const massiv3 = [false];
function concatArrays() {
    let massivreturn = []
    massivreturn.concat(arguments);

 }  
 concatArrays(massiv1, massiv2, massiv3)
// не работает
 