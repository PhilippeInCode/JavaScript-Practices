/* Ejercicio 8: Bucles For
Utiliza un bucle for para imprimir los números pares del 2 al 20. */

function numPares(){
    for(let numeros = 2; numeros <=20; numeros++){
        if(numeros % 2 === 0){
            console.log(numeros);
        }
    }
}

numPares();