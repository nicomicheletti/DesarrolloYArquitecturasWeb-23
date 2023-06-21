console.log('--EJERCICIO 1: VARIABLES Y OPERADORES');

//1. Variables y operadores

//a. Crear dos variables numéricas y utilizar el operador suma para guardar el valorde la suma de ambos números en una 3er variable.
var number1 = 5;
var number2 = 4;
var result = number1 + number2;

console.log('-Ejercicio 1.a:');
console.log('Si sumamos: ', number1);
console.log('y: ', number2);
console.log('El resultado es: ', result);
console.log(' ');


//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una3er variable

var firstName = "Nicolás ";
var lastName = "Micheletti";
var nameAndLastName = firstName + lastName;

console.log('-Ejercicio 1.b:');
console.log('Mi nombre es: ', firstName);
console.log('Mi apellido es: ', lastName);
console.log('Mi nombre completo es: ',nameAndLastName);
console.log(' ')

/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad deletras del string) guardando el resultado de la suma en una 3er variable (utilizarlength)*/

var team1 = "Barcelona";
var team2 = "Espanyol";
var result3 = team1 + team2;

console.log('-Ejercicio 1.c:');
console.log('Barcelona tiene esta cantidad de letras: ', team1.length)
console.log('Espanyol tiene esta cantidad de letras: ', team2.length)
console.log('La suma de ambas es: ', result3.length)
console.log(' ')