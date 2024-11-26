/* Ejercicio 7: Bucle Do...While
Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. 
Continúa pidiendo hasta que ingrese un número negativo.*/

let numero = 10;

do {
    numero = parseInt(prompt("Introduce un número positivo (o un número negativo para salir):"), 10);

    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else if (numero >= 0) {
        console.log(`Has introducido el número positivo: " + ${numero}`);
    }
} while (numero >= 0);

console.log("Has introducido un número negativo. Fin del programa.");
