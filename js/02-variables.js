"use strict"
/*Variables: Una variable es un contenedor de informacion o datos. Las variables deben tener un nombre. Si es un string(texto) debe ir dentro de las comillas ('' o "")
Si es un numero entero sin ellas. Las variables se pueden reasignar, llamando a la variable y asignandole un nuevo valor NombreVar = "Nuevo valor", 
Siempre y cuando: no sea una variable constante(const NombreVar = "Valor").

Let: Permite definir variables en el bloque donde se esta usando ejemplo solo dentro de un if
Modo estricto ("use strict"): habilita funciones nuevas y por otra parte, evita errores o malas practicas, por ejemplo el crear variables sin la palabra "var" antes entre otros.
*/

var pais = "Venezuela";
var continente = "Latino America";
var antiguedad = 2021
var paisContinente = pais + " " + continente;
let prueba = "Hola";
pais = "España";
continente = "Europa";
console.log(pais, continente, antiguedad);
alert(paisContinente);