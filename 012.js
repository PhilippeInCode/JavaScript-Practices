/* Ejercicio 12: Parámetros y Argumentos
Crea una función llamada calcularAreaRectangulo que acepte dos parámetros: base y altura. 
La función debe calcular y retornar el área del rectángulo. */

function calcularAreaRectangulo(base, altura){
    return base * altura;
}

let area = calcularAreaRectangulo(20, 30);

console.log(`El area del rectangulo es ${area}`);