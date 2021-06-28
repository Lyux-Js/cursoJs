'use strict'

/*
Operadores:
Suma = +                -   Resta = -
Multiplicacion = *      -   Division = /
Resto = %               -
Mayor que = >           -   Menor que = <
Mayor o igual que = >=  -   menor o igual que = <=
*/

var numero1 = 3;
var numero2 = 3;
var operacion = numero1 % numero2;

console.log("El resultado de la operacion es: " + operacion);
/* 
Tipos de datos:

Boolean:
El tipo de dato True es igual a 1.
El tipo de dato False es igual a 0.


String o texto.
number o numero entero.
floar o numero decimal.
*/

var numeroEntero = 44;
var cadenaTexto = "Hola 'que' tal";
var verdaderFalso = true;
var numeroFalso = "20"
// console.log(Number(numeroFalso)+1); convierte una cadena de texto a entero
// console.log(parseInt(numeroFalso)+1); convierte una cadena de texto a entero
// console.log(parseFloat(numeroFalso)+1); convierte una cadena de texto a entero
// console.log(String(numeroEntero)+4); convirtio a texto
// typeof: se usara para saber el tipo de dato que es.
console.log(typeof numeroEntero);
console.log(typeof cadenaTexto);
console.log(typeof verdaderFalso);
console.log(typeof numeroFalso);