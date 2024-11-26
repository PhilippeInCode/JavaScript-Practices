/* Ejercicio 16: Scope Global y Local
Declara una variable global llamada contador con valor 0. Luego, crea 
una función que incremente el contador en 1 cada vez que se llama. 
Imprime el valor del contador después de llamar a la función varias veces. */

let contador = 0;

function aumentarValor(){
    contador++;
}

aumentarValor();
aumentarValor();
aumentarValor();
aumentarValor();
aumentarValor();

console.log(contador);