"use strict"
/* 
/*Variables (var): Una variable es un contenedor de informacion o datos. Las variables deben tener un nombre. Si es un string(texto) debe ir dentro de las comillas ('' o "")
Si es un numero entero sin ellas. Las variables se pueden reasignar, llamando a la variable y asignandole un nuevo valor NombreVar = "Nuevo valor", 
Siempre y cuando: no sea una variable constante(const NombreVar = "Valor").
Let: Permite definir variables en el bloque donde se esta usando ejemplo solo dentro de un if

*/

// Ejercicio basico con var
var numero = 40;
console.log(numero); // valor 40
if (true) {
    var numero = 50
    console.log(numero); // Valor 50
}

console.log(numero); // valor 50

// Ejercicio basico con let

var texto = "Curso JS";
console.log(texto); // Imprime el valor asignado.

// La variable let actua sobre el bloque unicamente en este caso del if
if (true) {
    let texto = "Curso JavaScript";
    console.log(texto); // Imprime el valor dentro del bloque
}

console.log(texto); // Imprime el valor global de la variable