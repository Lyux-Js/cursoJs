'use strict'

/* 
Condicional IF:
Si A es igual a B Has esto
Operadores relacionales:
mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
igual: ==
distinto o diferente: !=
else if (): no anida si no se coloca al lado
*/
// Se crean las variables a utilizar
var edad = 31;
var nombre = "Lyux";
// Se crea el condicional if
if (edad >= 18) {
    console.log("El usuario: " + nombre + " es mayor de edad tiene: " + edad + " Años");
    // Se anida un if dentro de otro
    if (edad <= 30) {
        console.log("Estas en el rango de 18 a 30 años");
        // Se usa el else if para anidar o colocar al lado.    
    } else if (edad > 30) {
        console.log("Estas en el rango de +30 anos");
    }
    // De lo contrario mostrara lo siguiente    
} else {
    console.log("El usuario: " + nombre + " es menor de edad tiene: " + edad + " Años");
}

/* Operadores logicos
AND (Y): &&
OR (O): || 
NEGACION: !
*/

var year = 2021;

// negacion
if (year != 2021) {
    console.log("El año es diferente de 2021 el año actual es: " + year);
}
// AND y Diferente o negacion
if (year >= 2021 && year >= 2000 && year != 2030) {
    console.log("Estamos en el siglo 21");
} else {
    console.log("estamos en una era diferente");
}

// or
if (year == 2021 || (year >= 2020 && year == 2021)) {
    console.log("El año caba en 1")

}